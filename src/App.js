import 'conga-component-library';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './shared/Header/Header';
import VerticalNav from './shared/VerticalNav/VerticalNav';
import Main from './routes/Main/Main';
import Home from './routes/Home/Home';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadPriceLists,
  selectSelectedPriceListId
} from './features/priceList/priceListSlice';
import { loadTopCategories } from './features/categories/categoriesSlice';
import { useLoadProducts } from './app/hooks/useLoadProducts';

function App() {
  const dispatch = useDispatch();
  const loadProducts = useLoadProducts();
  const selectedPriceListId = useSelector(selectSelectedPriceListId);

  useEffect(() => {
    const interceptor = axios.interceptors.request.use(async config => {
      if (!config.url.includes('api/admin/v1') && selectedPriceListId) {
        config.headers.PriceListId = selectedPriceListId;
      }
      return config;
    });

    return () => {
      axios.interceptors.request.eject(interceptor);
    };
  }, [selectedPriceListId]);

  useEffect(() => {
    dispatch(loadPriceLists());
    dispatch(loadTopCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadTopCategories());
    loadProducts();
  }, [dispatch, selectedPriceListId]);

  return (
    <div className='App LightTheme'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                {/* <ActionBar/> */}
                <div className='bodyContent d-flex'>
                  <ErrorBoundary>
                    <VerticalNav />
                  </ErrorBoundary>
                  <Main />
                </div>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
