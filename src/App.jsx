import React, { useState } from 'react';
import './styles.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h2>Counter</h2>
      <div className="counter">
        <button className="counter-btn" onClick={decrement}>-</button>
        <span className="count">{count}</span>
        <button className="counter-btn" onClick={increment}>+</button>
      </div>
      <button className="reset-btn" onClick={reset}>Reset</button>
    </div>
  );
}
 
export default Counter;


