// import React from 'react';

// const Sample = (props) => {
//   return (
//     <>
//       <h3>
//         I am Sample component {props.message} : Counter {props.counter}
//       </h3>
//       <p>City: {props.city}</p>
//       <hr />
//       <button onClick={() => props.inc(3)}>Increment</button>
//     </>
//   );
// };

// export default Sample;

import React, { Component } from 'react';

class Sample extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h3>
          I am Sample component {this.props.message} : Counter{' '}
          {this.props.counter}
        </h3>
        <p>City: {this.props.city}</p>
        <hr />
        <button onClick={() => this.props.inc(3)}>Increment</button>
      </>
    );
  }
}

export default Sample;
