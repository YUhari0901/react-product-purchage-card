import styles from './PurchageButton.module.css';
import React from 'react';
import IconNaver from '../../assets/NaverIcon.svg';

const PurchageButton = () => {
  return (
    <div calssName={styles.purchageContainer}>
      <button className={styles.addPurchageButton} type="button">
        <img src={IconNaver} alt="네이버 아이콘" />
        <span className={styles.text}>
        구매하기
        </span>
      </button>
    </div>
  );
};

export default PurchageButton;
