import React from 'react';
import './Calculator.css';
import { buttonsa, operators } from './buttons';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <div className="wrapper_top">
            <p className="output">0</p>
          </div>
          <div className="wrapper_middle">
            <div className="buttonsa">
              {
              buttonsa.map((data) => (
                <button type="button" key={data.name} id={data.name}>{data.value}</button>
              ))
            }
            </div>
            <div className="operations">
              {
              operators.map((data) => (
                <button type="button" key={data.name} id={data.name}>{data.value}</button>
              ))
            }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
