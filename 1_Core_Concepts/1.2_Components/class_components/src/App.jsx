import Counter from "./components/Counter";
import Counter1 from "./components/Counter1";

// rcc = shortcut for class based components
import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super(); // calls parent constructor (in this case Component), and allows usage of this keyword inside constructor method

    // this.state = {
    //   count: 0,
    // }; // state is an object that holds data that can change over time, for better understanding we are using other words

    this.state = {
      yeah: 0,
    };
  }

  componentDidMount() {
    console.log("componentDidMount: Component mounted first time");
  }

  increment() {
    this.setState({ yeah: this.state.yeah + 1 });
  }

  decrement() {
    this.setState({ yeah: this.state.yeah - 1 });
  }

  componentWillUnmount() {
    // this executes if we comment out the h1 inside the render method, as it says that it removed the h1
    console.log("componentWillUnmount: Component is about to be removed");
  }
  
  render() {
    return (
      <div>
        <Counter1 number={this.state.yeah} />
        <Counter number={this.state.yeah} />
        <button onClick={this.decrement.bind(this)}>decrease yeah</button>

        {/* OR  */}

        <button
          onClick={() => {
            this.increment();
          }}
        >
          increase yeah
        </button>
      </div>
    );
  }
}
