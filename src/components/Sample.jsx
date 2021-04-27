import React, { useEffect } from 'react';

const Sample = (props) => {
  useEffect(() => {
    console.log('useEffect : Mounting : Sample');
    return () => {
      console.log('useEffect : Unmounting : Sample');
    };
  }, []);

  return (
    <>
      <h3>Sample Component {props.i}</h3>
      <hr />
      <button
        className='btn btn-primary'
        onClick={() => props.foo('Good afternoon')}
      >
        Click Here!
      </button>
    </>
  );
};

export default Sample;
