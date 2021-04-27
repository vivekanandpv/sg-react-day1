import React, { useState } from 'react';
import Sample from './components/Sample';

const App = (props) => {
  console.log('App is called');

  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <div className='container p-5'>
        <h3>App Component: {counter}</h3>
        <hr />
        <button className='btn btn-info' onClick={increment}>
          Increment
        </button>
      </div>
    </>
  );
};

export default App;
