import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';
import { REQUEST_HEADERS } from '../../util/helpers';
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
  }
};

export const loadProducts = createAsyncThunk(
  'products/loadProducts',
  async (payload = { page: 1 }, { getState }) => {
    const {
      products: { paginationData },
      categories: { selectedCategory }
    } = getState();
    if (selectedCategory) {
      return axios.get(
        `${baseUrl}catalog/categories/${selectedCategory.Id}/products?limit=${paginationData.perPage}&includes=prices&page=${payload.page}`,
        { headers: REQUEST_HEADERS}
      );
    } else {
      return axios.get(
        `${baseUrl}catalog/products?limit=${paginationData.perPage}&includes=prices&page=${payload.page}`,
        { headers: REQUEST_HEADERS }
      );
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
    state.paginationData.total = contentRangeHeader
      .split(' ')[1]
      .split('/')[1];
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
    }
  },
  extraReducers: {
    [loadProducts.pending]: pendingReducer,
    [loadProducts.fulfilled]: fulfilledReducer,
    [loadProducts.rejected]: rejectedReducer
  }
});

export const { perPageChange } = productsSlice.actions;
export default productsSlice.reducer;
