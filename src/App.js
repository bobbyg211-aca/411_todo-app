import React, { Component } from "react";
import List from "./components/List";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
        <List />
      </div>
    );
  }
}
