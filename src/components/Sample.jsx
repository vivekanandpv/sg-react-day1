import React, { Component } from 'react';

class Sample extends Component {
  state = { counter: 0 };
  increment = () => {
    this.setState((previousState, previousProps) => {
      console.log(
        'previous state',
        previousState,
        'previous props',
        previousProps
      );
      return { counter: previousState.counter + previousProps.factor };
    });
  };
  render() {
    return (
      <>
        <h3>Counter: {this.state.counter}</h3>
        <button className='btn btn-primary' onClick={this.increment}>
          Increment
        </button>
      </>
    );
  }
}

export default Sample;
