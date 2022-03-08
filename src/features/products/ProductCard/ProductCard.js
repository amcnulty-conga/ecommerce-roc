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
        <div className="productImage" style={{backgroundImage: `${props.productImage ? `url("${props.productImage}")` : `url(${productImage})`}`}}></div>
        <div className="productDescription">
          {
            props.product && props.product.Description
            ?
            `${props.product.Description.substring(0, 90)}${props.product.Description.length > 90 ? '...' : ''}`
            :
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quis ipsam neque error natus magnam harum labore iure.'
          }
        </div>
        <div>
          {
            (props.product && props.product.Prices && props.product.Prices.length > 0) ?
            props.product.Prices
            .filter((priceList, index) => {
              if (priceList.ChargeType === 'Standard Price' && index > 0) return false;
              return true;
            })
            .map((priceList) => (
              <div key={priceList.Id} className="productPrice mt-2 d-flex justify-content-between">
                <label>{priceList.ChargeType}</label>
                <span>${priceList.ListPrice.DisplayValue}</span>
              </div>
            ))
            :
            <div className="productPrice mt-2 d-flex justify-content-between">
              <label>Standard Price</label>
              <span>$1000.00</span>
            </div>
          }
        </div>
        {/* <div className="allPrices d-flex align-items-center">
          <span className='me-1'>{t('productCard.ALL_PRICES')}</span>
          <cc-icon name='far circle-question'></cc-icon>
        </div> */}
      </div>
      <div className="productCardFooter d-flex justify-content-center align-items-center">
        <label>{t('productCard.QUANTITY_LABEL')}</label>
        {/* <input className='form-control mx-3' type="number" /> */}
        <cc-input type='number' inputValue='1' style={{paddingTop: '3px'}}></cc-input>
        <cc-button label={t('common.ADD_TO_CART')} variant='primary'></cc-button>
      </div>
    </div>
  );
};

export default ProductCard;