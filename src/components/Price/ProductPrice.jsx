import styles from './Price.module.css';
import React from 'react';

const ProductPrice = ({ sale, priceNormal, priceReduced }) => {
  let price = { sale: '88', priceOrigin: '56,760', priceReduced: '6,370' };

  return (
    <div className={styles.priceContainer}>
      <span className={styles.sale}>
        <span className={styles.a11y}>할인율</span>
        {price.sale + '%'}
      </span>
      <span className={styles.priceOrigin}>
        <span className={styles.a11y}>정가</span>
        {price.priceOrigin + '원'}
      </span>
      <span className={styles.priceReduced}>
        <span className={styles.a11y}>할인된 금액</span>
        {price.priceReduced + '원'}
      </span>
    </div>
  );
};

export default ProductPrice;
