import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
   
  }

  handleIncrease() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  handleDecrease() {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }



  render() {
    return (
      <div className="classCounter">
        <h1>ClassCounter</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleIncrease}>Increase</button>
        <button onClick={this.handleDecrease}>Decrease</button>
       
      </div>
    );
  }
}

export default ClassCounter;
