import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';
import { REQUEST_HEADERS } from '../../util/helpers';

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
    let response;
    if (selectedCategory) {
      response = await fetch(
        `${baseUrl}catalog/categories/${selectedCategory.Id}/products?limit=${paginationData.perPage}&includes=prices&page=${payload.page}`,
        {
          headers: new Headers(REQUEST_HEADERS)
        }
      );
    } else {
      response = await fetch(
        `${baseUrl}catalog/products?limit=${paginationData.perPage}&includes=prices&page=${payload.page}`,
        {
          headers: new Headers(REQUEST_HEADERS)
        }
      );
    }
    const data = await response.json();
    return { headers: [...response.headers], body: data };
  }
);

const pendingReducer = (state, action) => {
  state.isLoading = true;
  state.list = [];
};

const fulfilledReducer = (state, action) => {
  const contentRangeHeader = action.payload.headers.find(
    header => header[0] === 'content-range'
  );
  if (contentRangeHeader && contentRangeHeader.length > 0) {
    state.paginationData.from = contentRangeHeader[1]
      .split('Product ')[1]
      .split('/')[0]
      .split('-')[0];
    state.paginationData.to = contentRangeHeader[1]
      .split('Product ')[1]
      .split('/')[0]
      .split('-')[1];
    state.paginationData.total = contentRangeHeader[1]
      .split('Product ')[1]
      .split('/')[1];
  }
  state.isLoading = false;
  state.list = action.payload.body;
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
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
