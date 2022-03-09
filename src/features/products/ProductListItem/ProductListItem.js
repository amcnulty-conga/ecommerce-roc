import React from 'react';
import { useTranslation } from 'react-i18next';
import productImage from './productImage.png';
import './ProductListItem.scss';

const ProductListItem = props => {
  const { t } = useTranslation();
  return (
    <div className='ProductListItem d-flex py-4'>
      <div
        className='productImage mb-3'
        style={{
          backgroundImage: `${
            props.productImage
              ? `url("${props.productImage}")`
              : `url(${productImage})`
          }`
        }}
      ></div>
      <div className='productNameAndDescription px-3 d-flex flex-column'>
        <span className='fw-bold'>{props.productName}</span>
        <span className="productDescription">
          {props.product && props.product.Description
            ? `${props.product.Description.substring(0, 90)}${
                props.product.Description.length > 90 ? '...' : ''
              }`
            : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quis ipsam neque error natus magnam harum labore iure.'}
        </span>
      </div>
      <div className='cardControls d-flex flex-column'>
        <div>
          {props.product &&
          props.product.Prices &&
          props.product.Prices.length > 0 ? (
            props.product.Prices.filter((priceList, index) => {
              if (priceList.ChargeType === 'Standard Price' && index > 0)
                return false;
              return true;
            }).map(priceList => (
              <div
                key={priceList.Id}
                className='productPrice mt-2 d-flex justify-content-between'
              >
                <label>{priceList.ChargeType}</label>
                <span>${priceList.ListPrice.DisplayValue}</span>
              </div>
            ))
          ) : (
            <div className='productPrice mt-2 d-flex justify-content-between'>
              <label>Standard Price</label>
              <span>$1000.00</span>
            </div>
          )}
        </div>
        <div className='productCardFooter mt-auto d-flex justify-content-center align-items-center'>
          <label>{t('productCard.QUANTITY_LABEL')}</label>
          <cc-input
            type='number'
            inputValue='1'
            style={{ paddingTop: '3px' }}
          ></cc-input>
          <cc-button
            label={props.product.ConfigurationType === 'Bundle' ? t('common.CONFIGURE') : t('common.ADD_TO_CART')}
            variant='primary'
          ></cc-button>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
