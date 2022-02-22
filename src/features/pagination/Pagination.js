import './Pagination.scss';

const Pagination = () => {
  return (
    <div className='Pagination d-flex align-items-center'>
      <span>Showing 1 - 15 of 352</span>
      <button className='btn px-2'>
        <cc-icon name='fas chevron-left'></cc-icon>
      </button>
      <input className='formControl' type='number' value={1} onChange={value => console.log(value)} />
      <button className='btn px-2'>
        <cc-icon name='fas chevron-right'></cc-icon>
      </button>
      <span>of 31</span>
      <span className='separator mx-3'></span>
      <input className='formControl me-2' type='number' value={1} onChange={value => console.log(value)} />
      <span>per page</span>
    </div>
  );
};

export default Pagination;