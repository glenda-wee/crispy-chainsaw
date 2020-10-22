import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
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
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>

        <button
          onClick={() => this.handleReset()}
          className="btn btn-secondary btn-sm m-2"
        >
          RESET
        </button>

        {this.renderTags()}
      </React.Fragment>
    );
  }

  renderTags() {
    if (this.state.tags.length == 0) return <p>There are no tages!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = (product) => {
    //instead of creating constructor, do this!
    console.log(product);
    this.setState({ value: this.state.value + 1 }); //tell react what has changed
  };

  handleReset = () => {
    //instead of creating constructor, do this!
    console.log("Increment Clicked", this);
    this.setState({ value: 0 }); //tell react what has changed
  };

  getBadgeColor() {
    let classes = "badge m-2 badge"; //to change color of badge dynamically
    classes += this.state.value == 0 ? "-warning" : "-primary";
    return classes;
  }

  formatCount() {
    return this.state.value == 0 ? "ZERO" : this.state.value;
  }
}

export default Counter;
