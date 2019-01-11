import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addTodo } from "../actions";

class NewTodo extends PureComponent {
  state = {
    newTodo: ""
  };

  handleChange = e => {
    const {
      target: { value }
    } = e;
    this.setState({ newTodo: value });
  };

  handleEnter = e => {
    const { addTodo } = this.props;
    const { newTodo } = this.state;
    const newTodoTrimmed = newTodo.trim();
    if (e.key !== "Enter" || newTodoTrimmed === "") {
      return;
    }
    addTodo(newTodoTrimmed);
    this.setState({ newTodo: "" });
  };

  render() {
    const { newTodo } = this.state;
    return (
      <div className="todo-item">
        <input
          name="newTodo"
          placeholder="Zadejte Nový úkol"
          value={newTodo}
          onChange={this.handleChange}
          onKeyPress={this.handleEnter}
        />
      </div>
    );
  }
}

export default connect(
  null,
  {
    addTodo
  }
)(NewTodo);

NewTodo.propTypes = {
  addTodo: PropTypes.func
};
