import styles from './Price.module.css';
import React from 'react';
import Counter from '../Counter/Counter';

const ProductPriceTotal = () => {
  // const [count, price, sale] = useState();

  let PriceTotal = {
    count: 3,
    price: 6370,
  };

  return (
    <div className={styles.priceTotalContainer}>
      <span className={styles.sum}>총 상품 금액
      <button className={styles.helpButton}>?<span className={styles.a11y}>도움말 버튼</span> </button>
      </span>
      <span className={styles.amount}>{'총 수량 ' + PriceTotal.count + '개'}</span>
      <span className={styles.sumTotal}>{PriceTotal.price * PriceTotal.count + '원'}</span>
    </div>
  );
};

export default ProductPriceTotal;
