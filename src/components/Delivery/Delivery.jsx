import styles from './Delivery.module.css';
import React from 'react';

const Delivery = () => {
  let produitDelivery = {
    DeliveryMethod: '택배배송',
    DeliveryPrice: '3,000',
    DeliveryPay: '(주문시 결제)',
    EachCharge: 10,
  };

  return (
    <div className={styles.deliveryContaioner}>
      <span className={styles.deliveryMethod}>
        {produitDelivery.DeliveryMethod}
      </span>
      <span className={styles.deliveryPrice}>
        {produitDelivery.DeliveryPrice + '원'}
      </span>
      <span className={styles.deliveryPay}>{produitDelivery.DeliveryPay}</span>
      <p className={styles.eachCharge}>
        {produitDelivery.EachCharge + '개마다 부과'}
      </p>
    </div>
  );
};

export default Delivery;
