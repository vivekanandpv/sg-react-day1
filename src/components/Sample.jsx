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
    console.log('Sample: constructor');
  }

  componentDidMount() {
    console.log('Sample: componentDidMount');
  }

  componentWillUnmount() {
    console.log('Sample: componentWillUnmount');
  }

  render() {
    console.log('Sample: render');
    return (
      <>
        <h3>State counter: {this.props.counter}</h3>
      </>
    );
  }
}

export default Sample;
