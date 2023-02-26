import style from './style.module.css';
import React from 'react';
import productImage from '../../assets/productImage.svg';

const PurchageView = ({ name, amount }) => {
  let product = { name: '레피젠 코로나 자가 검사키트', amount: '2개입X1박스' };

  return (
    <>
      <h2 className={style.a11y}>상품이미지와 상품명</h2>
      <img src={productImage} alt="레피젠 코로나 자가 검사키트 이미지" />
      <div>
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
