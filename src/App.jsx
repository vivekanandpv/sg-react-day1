import React, { useState, useEffect } from 'react';
import Sample from './components/Sample';

const App = (props) => {
  console.log('App is called');

  const [counter, setCounter] = useState(0);
  const [index, setIndex] = useState(0);

  const increment = (marker) => {
    if (marker === 'index') {
      setIndex(index + 1);
    } else {
      setCounter(counter + 1);
    }
  };

  useEffect(() => {
    console.log('useEffect: Update/filtration : Counter');
  }, [counter]);

  useEffect(() => {
    console.log('useEffect: Update/filtration : Index');
  }, [index]);

  return (
    <>
      <div className='container p-5'>
        <h3>
          App Component: Counter: {counter} {'>>'} Index: {index}
        </h3>
        <hr />
        <button
          className='btn btn-info mr-4'
          onClick={() => increment('counter')}
        >
          Increment Counter
        </button>
        <button className='btn btn-info' onClick={() => increment('index')}>
          Increment Index
        </button>
      </div>
    </>
  );
};

export default App;
