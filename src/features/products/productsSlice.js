import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

const initialState = {
  list: [],
  isLoading: false,
  errorMessage: null
}

export const loadProducts = createAsyncThunk(
  'products/loadProducts',
  async (payload, { getState }) => {
    const response = await fetch(`${baseUrl}catalog/products?limit=10&includes=prices`, {
      headers: new Headers({
        'Authorization': 'Bearer 123'
      }) 
    });
    return response.json();
  }
);
  
export const loadProductsFromCategory = createAsyncThunk(
  'products/loadProductsFromCategory',
  async (payload, { getState }) => {
    const { categories } = getState();
    console.log('categories :>> ', categories);
    const response = await fetch(`${baseUrl}catalog/products?limit=10&includes=prices`, {
      headers: new Headers({
        'Authorization': 'Bearer 123'
      }) 
    });
    return response.json();
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [loadProducts.pending]: (state, action) => {
      state.isLoading = true;
      state.list = [];
    },
    [loadProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    },
    [loadProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error ? action.error.message : 'Error loading products';
    }
  }
});

// export const { } = productsSlice.actions;
export default productsSlice.reducer;
