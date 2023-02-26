import React from 'react';
import style from './styles/global.module.css';
import Counter from './components/Counter/Counter';
import Delivery from './components/Delivery/Delivery';
import ProductPrice from './components/Price/ProductPrice';
import ProductPriceTotal from './components/Price/ProductPriceTotal';
import PurchageButton from './components/PurchageButton/PurchageButton';
import PurchageView from './components/PurchageView/PurchageView';

function App() {
  return (
    <>
      <h1 className={style.a11y}>상품구매 페이지 </h1>
      <main>
        <PurchageView />
        <ProductPrice />
        <Delivery />
        <Counter />
        <ProductPriceTotal />
        <PurchageButton />
      </main>
    </>
  );
}

export default App;
