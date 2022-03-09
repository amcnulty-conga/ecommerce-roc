import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import Pagination from '../../features/pagination/Pagination';
import ProductCard from '../../features/products/ProductCard/ProductCard';
import ProductCardSkeleton from '../../features/products/ProductCardSkeleton/ProductCardSkeleton';
import {
  productSortChange,
  productFamilyChange,
  selectProductFamily,
  selectSortText
} from '../../features/products/productsSlice';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from 'reactstrap';
import './Catalog.scss';
import { useLoadProducts } from '../../app/hooks/useLoadProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrip, faListUl } from '@fortawesome/free-solid-svg-icons';
import ProductListItem from '../../features/products/ProductListItem/ProductListItem';
import ProductListItemSkeleton from '../../features/products/ProductListItemSkeleton/ProductListItemSkeleton';

const Catalog = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeView, setActiveView] = useState('grid');
  const products = useSelector(state => state.products);
  const sortText = useSelector(selectSortText);
  const productFamily = useSelector(selectProductFamily);
  const dispatch = useDispatch();
  const loadProducts = useLoadProducts();

  useEffect(() => {
    loadProducts();
  }, [sortText, productFamily]);

  return (
    <div className='Catalog'>
      <div className='sectionHeader px-4 py-3 d-flex justify-content-between align-items-center'>
        <h5>Product Listing</h5>
        <div className='d-flex align-items-center'>
          <cc-icon name='far circle-question'></cc-icon>
          <a href='#' className='text-decoration-none ms-2'>
            Help
          </a>
        </div>
      </div>
      <div className='sectionBody px-4 py-3'>
        <div className='gridControls row align-items-center py-4'>
          <div className='col-12 col-lg-4 d-flex align-items-center order-1 order-lg-0 mt-3 mt-lg-0'>
            <select
              className='productFamilyInput form-select bg-white me-1'
              value={productFamily}
              onChange={event =>
                dispatch(productFamilyChange(event.target.value))
              }
            >
              <option value=''>Product Family</option>
              <option value='Software'>Software</option>
              <option value='Hardware'>Hardware</option>
              <option value='Maintenance-HW'>Maintenance-HW</option>
              <option value='Implementation'>Implementation</option>
              <option value='Training'>Training</option>
              <option value='Other'>Other</option>
              <option value='Maintenance-SW'>Maintenance-SW</option>
            </select>
            <Dropdown
              isOpen={dropdownOpen}
              toggle={() => setDropdownOpen(!dropdownOpen)}
            >
              <DropdownToggle data-toggle='dropdown' tag='span'>
                <cc-button icon='fas filter' variant='tertiary'></cc-button>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  onClick={() => dispatch(productSortChange('Name Asc'))}
                >
                  Name Asc
                </DropdownItem>
                <DropdownItem
                  onClick={() => dispatch(productSortChange('Name Desc'))}
                >
                  Name Desc
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className='col-12 col-lg-8 d-flex justify-content-lg-end align-items-center order-0 order-lg-1'>
            <ErrorBoundary>
              <Pagination />
            </ErrorBoundary>
            <div className='viewToggleButtons btn-group ms-2'>
              <button
                title='table'
                className={`btn btn-outline-secondary ${
                  activeView === 'table' ? 'current' : ''
                }`}
                onClick={() => setActiveView('table')}
              >
                <FontAwesomeIcon icon={faListUl} />
              </button>
              <button
                title='grid'
                className={`btn btn-outline-secondary ${
                  activeView === 'grid' ? 'current' : ''
                }`}
                onClick={() => setActiveView('grid')}
              >
                <FontAwesomeIcon icon={faGrip} />
              </button>
            </div>
          </div>
        </div>
        {sortText && (
          <span className='sortBadge badge bg-secondary'>
            {sortText}
            <button
              onClick={() => dispatch(productSortChange(''))}
              className='btn text-white py-0 pe-0'
            >
              &times;
            </button>
          </span>
        )}
        <div className='row'>
          {
            activeView === 'grid'
            ?
              products.isLoading ? (
                <>
                  <div className='col-12 col-lg-6 col-xxl-4 d-flex justify-content-center my-3'>
                    <ProductCardSkeleton />
                  </div>
                  <div className='col-12 col-lg-6 col-xxl-4 d-flex justify-content-center my-3'>
                    <ProductCardSkeleton />
                  </div>
                  <div className='col-12 col-lg-6 col-xxl-4 d-flex justify-content-center my-3'>
                    <ProductCardSkeleton />
                  </div>
                  <div className='col-12 col-lg-6 col-xxl-4 d-flex justify-content-center my-3'>
                    <ProductCardSkeleton />
                  </div>
                  <div className='col-12 col-lg-6 col-xxl-4 d-flex justify-content-center my-3'>
                    <ProductCardSkeleton />
                  </div>
                  <div className='col-12 col-lg-6 col-xxl-4 d-flex justify-content-center my-3'>
                    <ProductCardSkeleton />
                  </div>
                </>
              ) : (
                products.list.map(product => (
                  <div
                    className='col-12 col-lg-6 col-xxl-4 d-flex justify-content-center my-3'
                    key={product.Id}
                  >
                    <ProductCard
                      product={product}
                      productName={product.Name}
                      productImage={product.ImageURL}
                    />
                  </div>
                ))
              )
            :
              products.isLoading ? (
                <>
                  <ProductListItemSkeleton/>
                  <ProductListItemSkeleton/>
                  <ProductListItemSkeleton/>
                  <ProductListItemSkeleton/>
                  <ProductListItemSkeleton/>
                  <ProductListItemSkeleton/>
                </>
              ) : (
                products.list.map(product => (
                  <ProductListItem
                    product={product}
                    productName={product.Name}
                    productImage={product.ImageURL}
                  />
                ))
              )
          }
          {!products.isLoading && products.list.length === 0 && (
            <p>{products.errorMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
