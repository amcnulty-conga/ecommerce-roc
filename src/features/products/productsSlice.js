import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';
import { REQUEST_HEADERS } from '../../util/helpers';

const initialState = {
  list: [],
  isLoading: false,
  errorMessage: null
}

export const loadProducts = createAsyncThunk(
  'products/loadProducts',
  async (payload, { getState }) => {
    const response = await fetch(`${baseUrl}catalog/products?limit=10&includes=prices`, {
      headers: new Headers(REQUEST_HEADERS) 
    });
    return response.json();
  }
);
  
export const loadProductsFromCategory = createAsyncThunk(
  'products/loadProductsFromCategory',
  async (categoryId, { getState }) => {
    const response = await fetch(`${baseUrl}catalog/categories/${categoryId}/products`, {
      headers: new Headers(REQUEST_HEADERS) 
    });
    return response.json();
  }
);

const pendingReducer = (state, action) => {
  state.isLoading = true;
  state.list = [];
};

const fulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.list = action.payload;
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.errorMessage = action.error ? action.error.message : 'Error loading products';
};

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [loadProducts.pending]: pendingReducer,
    [loadProducts.fulfilled]: fulfilledReducer,
    [loadProducts.rejected]: rejectedReducer,
    [loadProductsFromCategory.pending]: pendingReducer,
    [loadProductsFromCategory.fulfilled]: (state, action) => {
      fulfilledReducer(state, action);
    },
    [loadProductsFromCategory.rejected]: rejectedReducer,
  }
});

// export const { } = productsSlice.actions;
export default productsSlice.reducer;
