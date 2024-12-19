import { useState } from "react";

export const CounterList = () => {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  const testClick = () => {
    const newCounter = count + 1;
    setCount(list.length + 1);
    setList([...list, newCounter]);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={testClick}>Нажми на меня</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};
