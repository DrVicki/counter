import React, { useState } from "react";
import { render } from "react-dom";
import { connect } from 'react-redux';
import { increment, decrement } from '../src/actions';

class Counter extends React.Component {
state = { count: 0 };

increment = () => {
   this.props.dispatch({ type: INCREMENT });
 };

 decrement = () => {
   this.props.dispatch({ type: DECREMENT});
 };

render() {
  return (
    <div className="counter">
      <h2>Counter</h2>
      <div>
        <button onClick={this.decrement}>-</button>
        <span className="count">{
          ...this.props.count
        }
          </span>
        <button onClick={this.increment}>+</button>
      </div>
    </div>
  );
}
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(mapStateToProps)(Counter);
