import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { getVisibleTodos } from "../selectors";
import TodoItem from "./TodoItem";

const TodoList = React.memo(({ todos }) => {
  const todoList = todos.map(todo => <TodoItem key={todo.id} item={todo} />);
  return <div>{todoList}</div>;
});

export default connect(state => ({
  todos: getVisibleTodos(state)
}))(TodoList);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
};
