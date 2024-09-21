import React, { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  
  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const clear = () => {
    setInput('');
  };

  const calculate = () => {
    try {
      setInput(String(eval(input))); // Display result in the same input
    } catch (err) {
      setInput('Error');
    }
  };

  const handleSqrt = () => {
    try {
      setInput(String(Math.sqrt(eval(input))));
    } catch (err) {
      setInput('Error');
    }
  };

  const handlePercent = () => {
    try {
      setInput(String(eval(input) / 100));
    } catch (err) {
      setInput('Error');
    }
  };

  const toggleSign = () => {
    if (input) {
      if (input.charAt(0) === '-') {
        setInput(input.substring(1));
      } else {
        setInput('-' + input);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-400">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-xs w-full">
        <h1 className="text-3xl font-bold text-center text-white mb-6">Calculator</h1>
        <input
          type="text"
          className="mb-4 p-4 border rounded text-right bg-gray-200 text-3xl text-gray-900 w-full"
          value={input}
          readOnly
        />
        <div className="grid grid-cols-4 gap-4">
          <button className="bg-red-500 text-white p-4 rounded" onClick={clear}>C</button>
          <button className="bg-purple-500 text-white p-4 rounded" onClick={toggleSign}>±</button>
          <button className="bg-purple-500 text-white p-4 rounded" onClick={handlePercent}>%</button>
          <button className="bg-blue-500 text-white p-4 rounded" onClick={() => handleClick('/')}>/</button>

          <button className="bg-gray-400 p-4 rounded" onClick={() => handleClick('7')}>7</button>
          <button className="bg-gray-400 p-4 rounded" onClick={() => handleClick('8')}>8</button>
          <button className="bg-gray-400 p-4 rounded" onClick={() => handleClick('9')}>9</button>
          <button className="bg-blue-500 text-white p-4 rounded" onClick={() => handleClick('*')}>*</button>

          <button className="bg-gray-400 p-4 rounded" onClick={() => handleClick('4')}>4</button>
          <button className="bg-gray-400 p-4 rounded" onClick={() => handleClick('5')}>5</button>
          <button className="bg-gray-400 p-4 rounded" onClick={() => handleClick('6')}>6</button>
          <button className="bg-blue-500 text-white p-4 rounded" onClick={() => handleClick('-')}>-</button>

          <button className="bg-gray-400 p-4 rounded" onClick={() => handleClick('1')}>1</button>
          <button className="bg-gray-400 p-4 rounded" onClick={() => handleClick('2')}>2</button>
          <button className="bg-gray-400 p-4 rounded" onClick={() => handleClick('3')}>3</button>
          <button className="bg-blue-500 text-white p-4 rounded" onClick={() => handleClick('+')}>+</button>

          <button className="col-span-2 bg-gray-400 p-4 rounded" onClick={() => handleClick('0')}>0</button>
          <button className="bg-gray-400 p-4 rounded" onClick={() => handleClick('.')}>.</button>
          <button className="bg-blue-500 text-white p-4 rounded" onClick={calculate}>=</button>
        </div>
        <button className="mt-4 w-full bg-green-500 text-white p-4 rounded" onClick={handleSqrt}>√</button>
      </div>
    </div>
  );
};

export default App;
