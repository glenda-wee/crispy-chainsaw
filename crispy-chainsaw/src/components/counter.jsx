import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
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
        <img src={this.state.imageUrl} alt="" />
        <span className={this.getBadgeColor()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary m-2"
        >
          Increment
        </button>
        <button onClick={this.handleReset} className="btn btn-secondary m-2">
          Reset
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

  handleIncrement = () => {
    //instead of creating constructor, do this!
    console.log("Increment Clicked", this);
    this.setState({ count: this.state.count + 1 }); //tell react what has changed
  };

  handleReset = () => {
    //instead of creating constructor, do this!
    console.log("Increment Clicked", this);
    this.setState({ count: 0 }); //tell react what has changed
  };

  getBadgeColor() {
    let classes = "badge m-2 badge"; //to change color of badge dynamically
    classes += this.state.count == 0 ? "-warning" : "-primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count == 0 ? <h1>ZERO SUCKERS</h1> : count;
  }
}

export default Counter;
