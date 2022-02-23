import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from '../../util/helpers';
import { loadProducts, perPageChange } from '../products/productsSlice';
import './Pagination.scss';

const Pagination = () => {
  const paginationData = useSelector(state => state.products.paginationData);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPageLocal, setPerPageLocal] = useState(paginationData.perPage);
  const dispatch = useDispatch();

  const debouncedEvent = useCallback(
    debounce(() => dispatch(loadProducts()), 500),
    []
  );

  const numberOfPages = Math.ceil(
    paginationData.total / paginationData.perPage
  );

  return (
    <div className='Pagination d-flex align-items-center'>
      <span>
        Showing <span>{paginationData.from}</span> -{' '}
        <span>{paginationData.to}</span> of <span>{paginationData.total}</span>
      </span>
      <button
        className='btn px-2'
        disabled={currentPage === 1}
        onClick={() => {
          setCurrentPage(currentPage - 1);
          dispatch(loadProducts({ page: currentPage - 1 }));
        }}
      >
        <cc-icon name='fas chevron-left'></cc-icon>
      </button>
      <input
        className='formControl'
        type='number'
        value={currentPage}
        min={1}
        max={numberOfPages}
        onChange={event => {
          if (event.target.validity.valid) {
            setCurrentPage(event.target.value);
            dispatch(loadProducts({ page: event.target.value }));
          }
        }}
      />
      <button
        className='btn px-2'
        disabled={currentPage === numberOfPages}
        onClick={() => {
          setCurrentPage(currentPage + 1);
          dispatch(loadProducts({ page: currentPage + 1 }));
        }}
      >
        <cc-icon name='fas chevron-right'></cc-icon>
      </button>
      <span>
        of <span>{numberOfPages}</span>
      </span>
      <span className='separator mx-3'></span>
      <input
        className='formControl me-2'
        type='number'
        value={perPageLocal}
        min={1}
        max={100}
        onChange={event => {
          if (event.target.validity.valid) {
            setPerPageLocal(event.target.value);
            setCurrentPage(1);
            dispatch(perPageChange(event.target.value));
            debouncedEvent();
          }
        }}
      />
      <span>per page</span>
    </div>
  );
};

export default Pagination;
