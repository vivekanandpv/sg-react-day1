import React, { Component } from 'react';
import Sample from './components/Sample.jsx';
import Demo from './components/Demo';

class App extends Component {
  state = {
    counter: 0,
  };

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <>
        <h3>App Component: {this.state.counter}</h3>
        <hr />
        <Sample
          message='Good evening'
          city='Bengaluru'
          counter={this.state.counter}
        />

        <hr />
        <button onClick={this.increment}>Increment</button>
      </>
    );
  }
}

export default App;
