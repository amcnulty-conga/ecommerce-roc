import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productsReducer from '../features/products/productsSlice';
import categoriesRducer from '../features/categories/categoriesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
    categories: categoriesRducer,
  },
});
