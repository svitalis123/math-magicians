import React, { useState } from 'react';
import './Calculator.css';
import { buttonsa, operators } from './buttons';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, setState] = useState({ total: 0, next: null, operation: null });
  const handleClick = (e) => {
    const value = e.target.name;
    const result = calculate(obj, value);
    setState(result);
  };

  const handleUpdate = (e) => {
    setState({ total: e.target.value });
  };
  return (
    <div className="container">
      <h3>Lets do some math!</h3>
      <div className="wrapper">
        <div className="wrapper_top">
          <p className="output" onChange={handleUpdate}>
            { obj.total}
            {obj.operation}
            { obj.next }
          </p>
        </div>
        <div className="wrapper_middle">
          <div className="buttonsa">
            {
              buttonsa.map((data) => (
                <button type="button" key={data.name} name={data.value} onClick={handleClick} id={data.name}>{data.value}</button>
              ))
            }
          </div>
          <div className="operations">
            {
              operators.map((data) => (
                <button type="button" key={data.name} name={data.value} onClick={handleClick} id={data.name}>{data.value}</button>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
