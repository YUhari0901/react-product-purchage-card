import style from './style.module.css';
import React from 'react';
import productImage from '../../assets/productImage.svg';

const PurchageView = ({ name, amount }) => {
  let product = { name: '래피젠 코로나 자가 검사 키트', amount: '2개입X1박스' };

  return (
    <>
      <h2 className={style.a11y}>상품이미지와 상품명</h2>
      <div className={style.imageContainer}>
        <img src={productImage} alt="래피젠 코로나 자가 검사 키트 이미지" />
      </div>
      <div className={style.productNameAmount}>
        <strong>
          {product.name}
          <br />
          {product.amount}
        </strong>
      </div>
    </>
  );
};

export default PurchageView;
