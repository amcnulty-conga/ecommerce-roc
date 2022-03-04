import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';
import { REQUEST_HEADERS, SORT_TEXT_TO_PARAM_MAP } from '../../util/helpers';
import axios from 'axios';

const initialState = {
  list: [],
  isLoading: false,
  errorMessage: null,
  paginationData: {
    from: 1,
    to: 12,
    total: 99,
    perPage: 10
  },
  sortText: '',
  productFamily: ''
};

/**
 * When calling loadProducts if no payload is provided the filtering and sorting parameters will be based on the current values in the redux store.
 * To override the query parameters for a one time call without changing values in redux store pass in a payload.
 */
export const loadProducts = createAsyncThunk(
  'products/loadProducts',
  async (payload, { getState, signal }) => {
    const source = axios.CancelToken.source();
    signal.addEventListener('abort', () => {
      source.cancel();
    });
    const {
      products: { paginationData, sortText, productFamily },
      categories: { selectedCategory }
    } = getState();
    const defaultLoadProductPayload = {
      page: 1,
      ...(sortText && { sort: SORT_TEXT_TO_PARAM_MAP[sortText] }),
      ...(productFamily && {
        filter: { filterField: 'Family', filterValue: productFamily }
      })
    };
    payload = { ...defaultLoadProductPayload, ...payload };
    const params = [
      `limit=${paginationData.perPage}`,
      'includes=prices',
      `page=${payload.page}`,
      ...(payload.sort && payload.sort.sortDirection && payload.sort.sortField
        ? [`sort=${payload.sort.sortDirection}(${payload.sort.sortField})`]
        : []),
      ...(payload.filter && payload.filter.filterField && payload.filter.filterValue
        ? [`filter=eq(${payload.filter.filterField}:'${payload.filter.filterValue}')`]
        : [])
    ];
    if (selectedCategory) {
      return axios.get(
        `${baseUrl}catalog/categories/${
          selectedCategory.Id
        }/products?${params.join('&')}`,
        { headers: REQUEST_HEADERS, cancelToken: source.token }
      );
    } else {
      return axios.get(`${baseUrl}catalog/products?${params.join('&')}`, {
        headers: REQUEST_HEADERS, cancelToken: source.token
      });
    }
  }
);

const pendingReducer = (state, action) => {
  state.isLoading = true;
  state.list = [];
};

const fulfilledReducer = (state, action) => {
  const contentRangeHeader = action.payload.headers['content-range'];
  if (contentRangeHeader && contentRangeHeader.length > 0) {
    state.paginationData.from = contentRangeHeader
      .split(' ')[1]
      .split('/')[0]
      .split('-')[0];
    state.paginationData.to = contentRangeHeader
      .split(' ')[1]
      .split('/')[0]
      .split('-')[1];
    state.paginationData.total = contentRangeHeader.split(' ')[1].split('/')[1];
  }
  state.isLoading = false;
  state.list = action.payload.data ? action.payload.data : [];
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.list = [];
  state.errorMessage = action.error
    ? action.error.message
    : 'Error loading products';
};

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    perPageChange: (state, action) => {
      state.paginationData.perPage = action.payload;
    },
    productSortChange: (state, action) => {
      state.sortText = action.payload;
    },
    productFamilyChange: (state, action) => {
      state.productFamily = action.payload;
    }
  },
  extraReducers: {
    [loadProducts.pending]: pendingReducer,
    [loadProducts.fulfilled]: fulfilledReducer,
    [loadProducts.rejected]: rejectedReducer
  }
});

export const { perPageChange, productSortChange, productFamilyChange } = productsSlice.actions;

export const selectSortText = state => state.products.sortText;
export const selectProductFamily = state => state.products.productFamily;

export default productsSlice.reducer;
