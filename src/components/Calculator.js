import React from 'react';
import './Calculator.css';
import { buttonsa, operators } from './buttons';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleClick = (e) => {
    const value = e.target.name;
    const result = calculate(this.state, value);
    this.setState(result);
  }

  handleUpdate = (e) => {
    this.setState({ total: e.target.value });
  }

  render() {
    const { total } = this.state;
    const { next } = this.state;
    const { operation } = this.state;
    return (
      <div className="container">
        <div className="wrapper">
          <div className="wrapper_top">
            <p className="output" onChange={this.handleUpdate}>
              { total}
              {operation}
              { next }
            </p>
          </div>
          <div className="wrapper_middle">
            <div className="buttonsa">
              {
              buttonsa.map((data) => (
                <button type="button" key={data.name} name={data.value} onClick={this.handleClick} id={data.name}>{data.value}</button>
              ))
            }
            </div>
            <div className="operations">
              {
              operators.map((data) => (
                <button type="button" key={data.name} name={data.value} onClick={this.handleClick} id={data.name}>{data.value}</button>
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
