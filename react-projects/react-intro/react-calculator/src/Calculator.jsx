import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const add = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
  };

  const subtract = () => {
    setResult(parseFloat(num1) - parseFloat(num2));
  };

  return (
    <div>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
      <div>Result: {result}</div>
    </div>
  );
};

export default Calculator;
