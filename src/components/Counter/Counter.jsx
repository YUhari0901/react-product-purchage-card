import React, { useState } from 'react';
import CounterStyle from './Counter.module';

const Counter = ({ min = 1, count: initialValue = 1, max = 10 }) => {
  const [count, setCount] = useState(initialValue);

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div className={CounterStyle.counterContainer}>
      <div className={CounterStyle.buttonContainer}>
        <button
          className={CounterStyle.minusButton}
          type="button"
          aria-label="카운트 1 감소"
          onClick={onDecrease}
        >
          -
        </button>
        <span className={CounterStyle.result}>{count}</span>
        <button
          className={CounterStyle.plusButton}
          type="button"
          aria-label="카운트 1 증가"
          onClick={onIncrease}
        >
          +
        </button>
      </div>
    </div>
  );
};

Counter.defaulProps = {
  initialValue: 0,
};

export default Counter;
