import React from 'react';

const Sample = (props) => {
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
