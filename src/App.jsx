import React, { useState, useEffect } from 'react';
import Sample from './components/Sample';

const App = (props) => {
  const [factor, setFactor] = useState(1);
  return (
    <>
      <div className='container p-5'>
        <h3>App Component: factor {factor}</h3>
        <hr />
        <button
          className='btn btn-primary'
          onClick={() => setFactor(factor + 1)}
        >
          Increment Factor
        </button>
        <hr />
        <Sample factor={factor} />
      </div>
    </>
  );
};

export default App;
