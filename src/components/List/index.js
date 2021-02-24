import React, { Component } from "react";

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      inputValue: "",
      listOfTodos: [],
    };
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      listOfTodos: [...this.state.listOfTodos, this.state.inputValue],
    });
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <div>
        <h3>{this.state.text}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Add Item to List</label>
          <br></br>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          ></input>
          <button type="submit">Submit</button>
        </form>
        <ol>
          {this.state.listOfTodos.map((todo, index) => {
            return <li key={index}>{todo}</li>;
          })}
        </ol>
      </div>
    );
  }
}
