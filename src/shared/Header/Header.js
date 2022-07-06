import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedPriceListIdChanged, selectPriceLists } from '../../features/priceList/priceListSlice';
import './Header.scss';

const Header = () => {
  const priceLists = useSelector(selectPriceLists);
  const [selectedPriceListId, setSelectedPriceListId] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedPriceListId) {
      dispatch(selectedPriceListIdChanged(selectedPriceListId))
    }
  }, [selectedPriceListId, dispatch]);

  return (
    <div className='Header'>
      <cc-app-bar
        productName='Catalog'
        brand='eCom'
        userName='Aaron'
        userEmail='amcnulty@conga.com'
        userAbbr='AM'
      ></cc-app-bar>

      <select
        className='selectedPriceListInput form-select bg-white'
        value={selectedPriceListId}
        onChange={event => setSelectedPriceListId(event.target.value)}
      >
        <option value=''>Select Price List</option>
        {
          priceLists.map(pl => (
            <option key={pl.Id} value={pl.Id}>{pl.Name}</option>
          ))
        }
      </select>
    </div>
  );
};

export default Header;
