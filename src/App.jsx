import React, { Component } from 'react';
import Sample from './components/Sample.jsx';
import Demo from './components/Demo';

class App extends Component {
  state = {
    counter: 0,
  };

  clickHandler = () => {
    this.setState({ counter: this.state.counter + 1 });
    console.log(this.state.counter);
  };

  render() {
    return (
      <>
        <h3>Counter: {this.state.counter}</h3>
        <hr />
        <button onClick={this.clickHandler}>Click Here!</button>
      </>
    );
  }
}

export default App;
