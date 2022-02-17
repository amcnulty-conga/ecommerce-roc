import React from 'react';
import { useTranslation } from 'react-i18next';
import productImage from './productImage.png';
import './ProductCard.scss';

const ProductCard = (props) => {
  const { t } = useTranslation();
  return (
    <div className='ProductCard'>
      <div className="productCardBody">
        <div className="productTitle">{props.productName}</div>
        <div className="productImage" style={{backgroundImage: `url("${props.productImage}")`}}></div>
        <div className="productDescription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quis ipsam neque error natus magnam harum labore iure.</div>
        <div className="productPrice mt-2 d-flex justify-content-between">
          <label>Standard Price</label>
          <span>${(props.product && props.product.Prices) ? props.product.Prices[0].ListPrice.DisplayValue : '1000.00'}</span>
        </div>
        <div className="allPrices d-flex align-items-center">
          <span className='me-1'>{t('productCard.ALL_PRICES')}</span>
          <cc-icon name='far circle-question'></cc-icon>
        </div>
      </div>
      <div className="productCardFooter d-flex justify-content-center align-items-center">
        <label>{t('productCard.QUANTITY_LABEL')}</label>
        {/* <input className='form-control mx-3' type="number" /> */}
        <cc-input type='number' ></cc-input>
        <button className="btn btn-sfdc">{t('common.ADD_TO_CART')}</button>
      </div>
    </div>
  );
};

export default ProductCard;