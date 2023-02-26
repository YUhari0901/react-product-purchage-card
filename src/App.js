import React from 'react';
import './styles/global.css';
import Counter from './components/Counter/Counter';
import Delivery from './components/Delivery/Delivery';
import ProductPrice from './components/Price/ProductPrice';
import ProductPriceTotal from './components/Price/ProductPriceTotal';
import PurchageButton from './components/PurchageButton/PurchageButton';
import PurchageView from './components/PurchageView/PurchageView';

export default function App() {
  return (
    <div>
      <h1>상품구매 페이지</h1>
      <p>Georgy, Hari et Loi :)</p>
      <PurchageView />
      <Counter />
      <ProductPrice />
      <Delivery />
      <ProductPriceTotal />
      <PurchageButton />
    </div>
  );
}
