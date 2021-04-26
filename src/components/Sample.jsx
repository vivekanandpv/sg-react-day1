// import React from 'react';

// const Sample = (props) => {
//   return (
//     <>
//       <h3>I am Sample component {props.message}</h3>
//       <p>City: {props.city}</p>
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
        <h3>I am Sample component {this.props.message}</h3>
        <p>City: {this.props.city}</p>
      </>
    );
  }
}

export default Sample;
