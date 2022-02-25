import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import Pagination from '../../features/pagination/Pagination';
import ProductCard from '../../features/products/ProductCard/ProductCard';
import ProductCardSkeleton from '../../features/products/ProductCardSkeleton/ProductCardSkeleton';
import { loadProducts } from '../../features/products/productsSlice';
import './Catalog.scss';

const Catalog = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  return (
    <div className='Catalog'>
      <div className='sectionHeader px-4 py-3 d-flex justify-content-between align-items-center'>
        <h5>Product Listing</h5>
        <div className='d-flex align-items-center'>
          <cc-icon name='far circle-question' ></cc-icon>
          <a href='#' className='text-decoration-none ms-2'>Help</a>
        </div>
      </div>
      <div className='sectionBody px-4 py-3'>
        <div className='gridControls row align-items-center py-4'>
            <div className='col-12 col-lg-5 d-flex align-items-center order-1 order-lg-0'>
              <label>Sort By:</label>
              <cc-select class='mx-3 me-auto' ></cc-select>
            </div>
            <div className='col-12 col-lg-7 d-flex justify-content-lg-end order-0 order-lg-1'>
              <ErrorBoundary>
                <Pagination/>
              </ErrorBoundary>
            </div>
        </div>
        <div className='row'>
          {
            products.isLoading
            ?
            <>
              <div className='col-12 col-lg-6 col-xxl-4 d-flex justify-content-center my-3'>
                <ProductCardSkeleton/>
              </div>
              <div className='col-12 col-lg-6 col-xxl-4 d-flex justify-content-center my-3'>
                <ProductCardSkeleton/>
              </div>
              <div className='col-12 col-lg-6 col-xxl-4 d-flex justify-content-center my-3'>
                <ProductCardSkeleton/>
              </div>
              <div className='col-12 col-lg-6 col-xxl-4 d-flex justify-content-center my-3'>
                <ProductCardSkeleton/>
              </div>
              <div className='col-12 col-lg-6 col-xxl-4 d-flex justify-content-center my-3'>
                <ProductCardSkeleton/>
              </div>
              <div className='col-12 col-lg-6 col-xxl-4 d-flex justify-content-center my-3'>
                <ProductCardSkeleton/>
              </div>
            </>
            :
            products.list.map(product => (
              <div className='col-12 col-lg-6 col-xxl-4 d-flex justify-content-center my-3' key={product.Id}>
                <ProductCard product={product} productName={product.Name} productImage={product.ImageURL} />
              </div>
            ))
          }
          {
            !products.isLoading && products.list.length === 0
            &&
            <p>{products.errorMessage}</p>
          }
        </div>
      </div>
    </div>
  );
};

export default Catalog;