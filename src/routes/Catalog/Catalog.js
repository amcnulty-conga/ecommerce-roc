import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../features/products/ProductCard/ProductCard';
import './Catalog.scss';

const Catalog = () => {
  const products = useSelector(state => state.products);
  return (
    <div className='Catalog'>
      <div className='sectionHeader px-4 py-3 d-flex justify-content-between align-items-center'>
        <h5>Bulk Upload of Products</h5>
        <div className='d-flex align-items-center'>
          <cc-icon name='far circle-question' ></cc-icon>
          <a href='#' className='text-decoration-none ms-2'>Help</a>
        </div>
      </div>
      <div className='sectionBody px-4 py-3'>
        <div className='gridControls d-flex align-items-center py-4'>
          <span>1-9 of 27 items</span>
          <span className='me-auto'>Sorted by price</span>
          <label>Sort By:</label>
          <cc-select class='mx-3' ></cc-select>
          <cc-icon name='fas list' ></cc-icon>
        </div>
        <div className='row'>
          {
            products.list.map(product => (
              <div className='col-12 col-lg-6 col-xxl-4 d-flex justify-content-center my-3' key={product.Id}>
                <ProductCard product={product} productName={product.Name} productImage={product.ImageURL} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Catalog;