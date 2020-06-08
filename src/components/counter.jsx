import React, { Component } from "react";

class Counter extends Component {
  // We use the this operator to every object or function we are going to call inside our class
  // We comment out the state so that we can have a single source of truth

  // state = {
  //   value: this.props.counter.value,
  // };

  // {this.functionName} to call a function
  // className's values are from bootstrap
  // the this.stage.tags.map is a way to iterate through our list. the (tag) is the name we used to get every elements of it. key is the id for each of tags
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          {" "}
          Increment{" "}
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          {" "}
          Delete{" "}
        </button>
      </div>
    );
  }

  // Function

  // object destructuring: instead of calling this.state.count, we destructed it and made a constant of it inside the function.
  // the const below means that the count is the one we have in our state and its value is getting by doing this.state
  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
