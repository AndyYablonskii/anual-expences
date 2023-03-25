import { isDisabled } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';
import './Counter.css'

const Counter = () => {

  const [count, setCount] = useState(0);

  function decrementCount() {
    setCount(count - 1);
  }

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div className='counter' >
      <button onClick={decrementCount}>-</button>
      <div>{count}</div>
      <button onClick={incrementCount}>+</button>
    </div>
  );
};

export default Counter;
