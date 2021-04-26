import React, { Component } from 'react';
import Sample from './components/Sample.jsx';
import Demo from './components/Demo';

class App extends Component {
  render() {
    return (
      <>
        <h3>App Component</h3>
        <hr />
        <Sample message='Good evening' city='Bengaluru' />
      </>
    );
  }
}

export default App;
