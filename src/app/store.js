import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productsReducer from '../features/products/productsSlice';
import categoriesRducer from '../features/categories/categoriesSlice';
import priceListsReducer from '../features/priceList/priceListSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
    categories: categoriesRducer,
    priceLists: priceListsReducer,
  },
});
