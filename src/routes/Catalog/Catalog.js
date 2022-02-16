import React from 'react';
import ProductCard from '../../features/products/ProductCard/ProductCard';
import './Catalog.scss';

const Catalog = () => {
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
        <cc-tab-set>
          <cc-tab-item role="heading" slot="tab">Download Product Data Template</cc-tab-item>
          <cc-tab-panel role="region" slot="panel">
            <div className='gridControls d-flex align-items-center py-4'>
              <span>1-9 of 27 items</span>
              <span className='me-auto'>Sorted by price</span>
              <label>Sort By:</label>
              <cc-select class='mx-3' ></cc-select>
              <cc-icon name='fas list' ></cc-icon>
            </div>
            <div className='row'>
              <div className='col-12 col-lg-6 col-xxl-4 d-flex justify-content-center my-3'>
                <ProductCard/>
              </div>
              <div className='col-12 col-lg-6 col-xxl-4 d-flex justify-content-center my-3'>
                <ProductCard/>
              </div>
              <div className='col-12 col-lg-6 col-xxl-4 d-flex justify-content-center my-3'>
                <ProductCard/>
              </div>
              <div className='col-12 col-lg-6 col-xxl-4 d-flex justify-content-center my-3'>
                <ProductCard/>
              </div>
              <div className='col-12 col-lg-6 col-xxl-4 d-flex justify-content-center my-3'>
                <ProductCard/>
              </div>
              <div className='col-12 col-lg-6 col-xxl-4 d-flex justify-content-center my-3'>
                <ProductCard/>
              </div>
              <div className='col-12 col-lg-6 col-xxl-4 d-flex justify-content-center my-3'>
                <ProductCard/>
              </div>
            </div>
          </cc-tab-panel>
          <cc-tab-item role="heading" slot="tab">Upload Product Data</cc-tab-item>
          <cc-tab-panel role="region" slot="panel">Upload Product Data Content</cc-tab-panel>
          <cc-tab-item role="heading" slot="tab">View Upload History</cc-tab-item>
          <cc-tab-panel role="region" slot="panel">View Upload History Content</cc-tab-panel>
        </cc-tab-set>
      </div>
    </div>
  );
};

export default Catalog;