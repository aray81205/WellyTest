// 5. React: 組件
// 問題：使用React創建一個簡單的計數器組件，具有增加和減少計數的按鈕。

import React, { useState } from "react";

const CountNumber = () => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  const deleteCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <p>CountNumber: {count}</p>
      <button onClick={addCount}>+1</button>
      <button onClick={deleteCount}>-1</button>
    </div>
  );
};

export default CountNumber;
