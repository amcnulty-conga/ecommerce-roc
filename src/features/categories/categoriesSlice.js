import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

const initialState = {
  selectedCategory: null,
  list: [],
  isLoading: false,
  errorMessage: null
}

export const loadTopCategories = createAsyncThunk(
  'categories/loadTopCategories',
  async () => {
    const response = await fetch(`${baseUrl}catalog/categories?filter=eq(AncestorId,null)`, {
      headers: new Headers({
        'Authorization': 'Bearer 123'
      }) 
    });
    return response.json();
  }
);

export const loadChildCategories = createAsyncThunk(
  'categories/loadCategories',
  async (category = { Id: null }, { dispatch } ) => {
    if (category) {
      dispatch(setSelectedCategory(category));
    }
    const { Id } = category;
    const response = await fetch(`${baseUrl}catalog/categories?filter=eq(AncestorId,${`'${Id}'`})`, {
      headers: new Headers({
        'Authorization': 'Bearer 123'
      }) 
    });
    return response.json();
  }
  );
  
  export const loadParentCategories = createAsyncThunk(
    'categories/loadParentCategories',
    async (category = { AncestorId: null }, { dispatch }) => {
      const response = await fetch(`${baseUrl}catalog/categories?filter=eq(AncestorId,${category.AncestorId ? `'${category.AncestorId}'` : null})`, {
      headers: new Headers({
        'Authorization': 'Bearer 123'
      })
    });
    const payload = response.json();
    console.log('payload :>> ', payload);
    return payload;
  }
)

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    }
  },
  extraReducers: {
    [loadTopCategories.pending]: (state, action) => {
      state.isLoading = true;
      state.list = [];
    },
    [loadTopCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    },
    [loadTopCategories.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error ? action.error.message : 'Error loading categories';
    },
    [loadChildCategories.pending]: (state, action) => {
      state.isLoading = true;
      state.list = [];
    },
    [loadChildCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    },
    [loadChildCategories.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error ? action.error.message : 'Error loading categories';
    }
  }
});

export const { setSelectedCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
