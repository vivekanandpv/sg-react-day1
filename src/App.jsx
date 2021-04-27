import React, { Component, PureComponent } from 'react';
import Sample from './components/Sample.jsx';
import Demo from './components/Demo';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: 'hi',
      flag: true,
      person: {
        name: 'Vivek',
        address: {
          city: 'Haveri',
        },
      },
    };
  }

  setup = () => {
    this.setState({ flag: !this.state.flag });
  };

  render() {
    return (
      <>
        <h1>Hello World</h1>
        <button onClick={this.setup}>Increment</button>
        {this.state.flag && <Sample />}
      </>
    );
  }
}

export default App;
