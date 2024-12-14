import React, { Component } from "react";

export default class Counter extends Component {
  componentDidUpdate(prevprops, prevState) {
    if (prevprops.number !== this.props.number) {
      console.log("componentDidUpdate: Component Updated");
    }
  }

  componentWillUnmount() {
    // this executes if we comment out the h1 inside the render method, as it says that it removed the h1
    console.log("componentWillUnmount: Component is about to be removed");
  }
  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    );
  }
}
