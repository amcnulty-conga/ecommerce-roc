import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CategoryButton.scss';

const CategoryButton = ({category, onClick, child}) => {
  return (
    <div className='CategoryButton'>
      <button className='btn w-100 text-start' onClick={onClick}>
        {!child && <FontAwesomeIcon icon={faArrowLeftLong} />}
        <span className={child ? 'ms-4' : 'fw-bold ms-1'}>{category.Label ? category.Label : category.Name}</span>
      </button>
    </div>
  );
};

export default CategoryButton;