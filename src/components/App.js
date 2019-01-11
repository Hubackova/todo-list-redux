import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getFetchingState } from "../selectors";
import { fetchTodos } from "../actions";

import ItemCounter from "./ItemCounter";
import ControlPanel from "./ControlPanel";
import ErrorPanel from "./ErrorPanel";
import NewTodo from "./NewTodo";
import TodoList from "./TodoList";
import "./App.scss";

export class App extends PureComponent {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { isFetching } = this.props;
    if (isFetching)
      return (
        <div>
          Loading - Here would be some fency loader if i have more time...
        </div>
      );

    return (
      <div className="App">
        <ControlPanel />
        <NewTodo />
        <ItemCounter />
        <ErrorPanel />
        <TodoList />
      </div>
    );
  }
}

export default connect(
  state => ({
    isFetching: getFetchingState(state)
  }),
  {
    fetchTodos
  }
)(App);

App.propTypes = {
  isFetching: PropTypes.bool,
  fetchTodos: PropTypes.func
};
