import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './VerticalNav.scss';
import { faChevronLeft, faChevronRight, faCog, faHome, faListDots, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadChildCategories, loadParentCategories, loadTopCategories } from '../../features/categories/categoriesSlice';
import CategoryButton from '../../features/categories/CategoryButton/CategoryButton';

const VerticalNav = () => {
  const [pinned, setPinned] = useState(false);
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(loadTopCategories());
  }, [dispatch]);

  return (
    <div className={`VerticalNav pt-3 ${pinned && 'pinned'}`}>

      <button className='btn collapseControl p-0 rounded-circle' onClick={() => setPinned(!pinned)}>
        {
          pinned
            ?
            <FontAwesomeIcon icon={faChevronRight} />
            :
            <FontAwesomeIcon icon={faChevronLeft} />
        }
      </button>
      <div className='searchInputWrapper subSectionLink d-flex flex-column justify-content-center' onClick={() => setPinned(false)}>
        {
          pinned
            ?
            <FontAwesomeIcon icon={faSearch} />
            :
            <cc-input type="text" placeholder="Search..." icon="search"></cc-input>
        }
      </div>
      <p className='subSectionHeader fw-bold'>{pinned ? <span>&mdash;</span> : 'WELCOME'}</p>
      <div className={`subSectionLink ${location.pathname === '/' && 'active'}`}>
        <Link className='text-decoration-none text-body d-block' to='/'>
          {
            pinned
              ?
              <FontAwesomeIcon icon={faHome} />
              :
              <>
                <FontAwesomeIcon icon={faHome} />
                <span className='ms-2'>Home</span>
              </>
          }
        </Link>
      </div>
      <div className={`subSectionLink ${location.pathname === '/catalog' && 'active'}`}>
        <Link className='text-decoration-none text-body d-block' to='/catalog'>
          {
            pinned
              ?
              <FontAwesomeIcon icon={faListDots} />
              :
              <>
                <FontAwesomeIcon icon={faListDots} />
                <span className='ms-2'>Catalog</span>
              </>
          }
        </Link>
      </div>
      <div className={`subSectionLink ${location.pathname === '/cart' && 'active'}`}>
        <Link className='text-decoration-none text-body d-block' to='/cart'>
          {
            pinned
              ?
              <FontAwesomeIcon icon={faShoppingCart} />
              :
              <>
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className='ms-2'>Products</span>
              </>
          }
        </Link>
      </div>
      <p className='subSectionHeader fw-bold mt-3'>{pinned ? <span>&mdash;</span> : 'ADMIN'}</p>
      <div className={`subSectionLink ${location.pathname === '/settings' && 'active'}`}>
        <Link className='text-decoration-none text-body d-block' to='/settings'>
          {
            pinned
              ?
              <FontAwesomeIcon icon={faCog} />
              :
              <>
                <FontAwesomeIcon icon={faCog} />
                <span className='ms-2'>Settings</span>
              </>
          }
        </Link>
      </div>
      {
        !pinned
        &&
        <>
          <p className='subSectionHeader fw-bold mt-3'>CATEGORIES</p>
          {
            categories.selectedCategory &&
            <CategoryButton category={categories.selectedCategory} onClick={() => dispatch(loadParentCategories(categories.selectedCategory))} />
          }
          {
            categories.list.map(category => <CategoryButton key={category.Id} child category={category} onClick={() => dispatch(loadChildCategories(category))} />)
          }
        </>
      }


    </div>
  );
};

export default VerticalNav;