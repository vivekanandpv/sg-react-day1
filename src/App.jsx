import React, { Component } from 'react';
import Sample from './components/Sample.jsx';
import Demo from './components/Demo';

class App extends Component {
  state = {
    country: 'India',
    year: 2020,
    showData: true,
    defaultMessage: 'No data available',
    list: [1, 2, 3, 4],
  };

  render() {
    const jsxArray = this.state.list.map((n) => {
      const m = n * n;
      return <p>Square is: {m}</p>;
    });

    return jsxArray;
  }
}

export default App;
