import React, { Component } from "react";
import TodoCard from "./components/TodoCard";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  removeItem = (i) => {
    let currState = this.state.listOfTodos;

    currState.splice(i, 1);
    this.setState({ listOfTodos: [...currState] });
  };

  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
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
            return (
              <TodoCard
                key={index}
                index={index}
                title={todo}
                remove={this.removeItem}
              />
            );
          })}
        </ol>
      </div>
    );
  }
}
