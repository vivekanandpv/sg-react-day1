import React, { useState, useEffect } from 'react';
import Sample from './components/Sample';

const App = (props) => {
  const [flag, setFlag] = useState(true);
  return (
    <>
      <div className='container p-5'>
        <h3>App Component</h3>
        <hr />
        <button className='btn btn-info mr-4' onClick={() => setFlag(!flag)}>
          Toggle
        </button>
        <hr />
        {flag && <Sample />}
      </div>
    </>
  );
};

export default App;
