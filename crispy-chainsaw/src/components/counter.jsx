import React, { Component } from "react";

class Counter extends Component {
  state = {
    // value: this.props.counter.value, //we want only 1 source of truth therefore we control directly from counters
    imageUrl: "https://picsum.photos/200",
    tags: ["chainsaw", "screwdriver", "hammer"],
  };

  styles = {
    //if you wanted to have a standard style to call
    fontSize: "100px",
    fontWeight: "bold",
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this); //bind object to handleIncrement object
  //   }

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <img src={this.state.imageUrl} alt="" />
        <span className={this.getBadgeColor()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onReset(this.props.counter)}
          className="btn btn-warning btn-sm m-2"
        >
          Reset
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)} //raise event to Counters
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        {this.renderTags()}
      </React.Fragment>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tages!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  //   handleIncrement = (product) => {
  //     //instead of creating constructor, do this!
  //     console.log(product);
  //     this.setState({ value: this.state.value + 1 }); //tell react what has changed
  //   };

  getBadgeColor() {
    let classes = "badge m-2 badge"; //to change color of badge dynamically
    classes += this.props.counter.value === 0 ? "-warning" : "-primary";
    return classes;
  }

  formatCount() {
    return this.props.counter.value === 0 ? "ZERO" : this.props.counter.value;
  }
}

export default Counter;
