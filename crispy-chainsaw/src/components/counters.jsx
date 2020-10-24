import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  //   state = {
  //     counters: [
  //       { id: 1, value: 4 }, //how do we pass data to components (i.e. value)
  //       { id: 2, value: 0 },
  //       { id: 3, value: 0 },
  //       { id: 4, value: 0 },
  //     ],
  //   };

  //   handleDelete = (counterId) => {
  //     //create new array without given counter
  //     console.log("delete called", counterId);
  //     const counters = this.state.counters.filter((c) => c.id !== counterId);
  //     this.setState({ counters });
  //   };

  //   handleResetAll = () => {
  //     const counters = this.state.counters.map((c) => {
  //       c.value = 0;
  //       return c;
  //     });

  //     this.setState({ counters });
  //   };

  //   handleIncrement = (counter) => {
  //     const counters = [...this.state.counters]; //to clone array to increment different object
  //     // counters[0].value++; //we don't do this becuase it directly increments the actual array
  //     // console.log(this.state.counters[0]);
  //     const index = counters.indexOf(counter);
  //     counters[index] = { ...counter };
  //     counters[index].value++;
  //     this.setState({ counters });
  //   };

  state = {
    counters: [
      { id: 1, value: 4 }, //how do we pass data to components (i.e. value)
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    //create new array without given counter
    console.log("delete called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleResetAll = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; //to clone array to increment different object
    // counters[0].value++; //we don't do this becuase it directly increments the actual array
    // console.log(this.state.counters[0]);
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.props.onResetAll}
          className="btn btn-primary btn-sm m-2"
        >
          Reset All
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id} //used internally
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onReset={this.props.onReset}
            // value={counter.value}
            // id={counter.id}
            counter={counter}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
