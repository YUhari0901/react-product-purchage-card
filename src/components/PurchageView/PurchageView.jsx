import styles from './Delivery.module.css';
import React from 'react';
import productImage from '../../assets/productImage.svg';

const PurchageView = () => {
  return (
    <div>
      <h2>상품이미지와 상품명</h2>
      <img src={productImage} alt="레피젠 코로나 자가 검사키트 이미지" />
      <span>레피젠 코로나 자가 검사키트</span>
      <br/>
    </div>
  );
};

export default PurchageView;
