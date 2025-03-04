import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState('');

  // Clear input field
  const clear = () => {
    setCount('');
  };

  // Handle number and operator clicks
  const onHandleClick = (e) => {
    const value = e.target.innerText;

    // Prevent multiple consecutive operators
    if (["+", "-", "*", "/", "%"].includes(value) && count.slice(-1).match(/[+\-*/%]/)) {
      return;
    }

    setCount((prev) => prev + value);
  };

  // Calculate the result
  const result = (e) => {
    if (e.target.innerText === "=") {
      try {
        setCount(eval(count).toString()); // Calculate expression
      } catch (error) {
        setCount("Error"); // Handle invalid expressions
      }
    }
  };

  return (
    <>
      <h1>Calculator</h1>

      <div >
        <div>
          <input value={count} readOnly />
        </div>

        <div>
          <button onClick={clear}>AC</button>
          <button onClick={onHandleClick}>/</button>
          <button onClick={onHandleClick}>%</button>
          <button onClick={onHandleClick}>*</button>
        </div>
        <div>
          <button onClick={onHandleClick}>7</button>
          <button onClick={onHandleClick}>8</button>
          <button onClick={onHandleClick}>9</button>
          <button onClick={onHandleClick}>-</button>
        </div>
        <div>
          <button onClick={onHandleClick}>4</button>
          <button onClick={onHandleClick}>5</button>
          <button onClick={onHandleClick}>6</button>
          <button onClick={onHandleClick}>+</button>
        </div>
        <div>
          <button onClick={onHandleClick}>1</button>
          <button onClick={onHandleClick}>2</button>
          <button onClick={onHandleClick}>3</button>
        </div>
        <div>
          <button onClick={onHandleClick}>0</button>
          <button onClick={onHandleClick}>.</button>
          <button onClick={result}>=</button>
        </div>
      </div>
    </>
  );
}

export default App;
