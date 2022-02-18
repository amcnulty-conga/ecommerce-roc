import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

const initialState = {
  list: [],
  isLoading: false,
  errorMessage: null
}

export const loadProducts = createAsyncThunk(
  'products/loadProducts',
  async () => {
    const response = await fetch(`${baseUrl}catalog/products?limit=10&includes=prices`, {
      headers: new Headers({
        'Authorization': 'Bearer 123'
      }) 
    });
    // const response = await fetch('https://api.github.com/users');
    return response.json();
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [loadProducts.pending]: (state, action) => {
      console.log('in pending');
      state.isLoading = true;
      state.list = [];
    },
    [loadProducts.fulfilled]: (state, action) => {
      console.log('in fulfilled');
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
