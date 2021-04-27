import React, { useEffect, useState } from 'react';

const Sample = (props) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((previousState) => {
      console.log('previous counter', previousState, 'props', props);
      return previousState + props.factor;
    });
  };

  return (
    <>
      <h3>Sample Component {counter}</h3>
      <hr />
      <button className='btn btn-primary' onClick={increment}>
        Click Here!
      </button>
    </>
  );
};

export default Sample;
