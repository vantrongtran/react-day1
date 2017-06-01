import React, { Component } from 'react';

class Clock extends Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>{this.props.ten}</h2>
      </div>
    );
  }
}

export default Clock;
