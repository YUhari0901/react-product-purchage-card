import styles from './PurchageButton.module.css';
import React from 'react';
import IconNaver from '../../assets/productImage.png';

const PurchageButton = () => {
  return (
    <div calssName={styles.purchageContainer}>
      <button className={styles.addPurchageButton} type="button">
        <img src="../../assets/productImage.png" alt="네이버 아이콘" />
        구매하기
      </button>
    </div>
  );
};

export default PurchageButton;
