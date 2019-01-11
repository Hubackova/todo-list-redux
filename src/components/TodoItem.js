import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { editTodo, deleteTodo, toggleTodo } from "../actions";
import "./TodoItem.scss";

class TodoItem extends PureComponent {
  state = {
    isEditing: false,
    text: this.props.item.text
  };

  startEdit = () => {
    this.setState({ isEditing: true });
  };

  handleChange = e => {
    const {
      target: { value }
    } = e;
    this.setState({ text: value });
  };

  handleEdit = e => {
    const { editTodo, item: {id} } = this.props;
    const {text} = this.state
    if (!(e.key === "Enter" || e.type === "blur")) return;
    editTodo(id, text);
    this.setState({ isEditing: false });
  };

  render() {
    const { item, deleteTodo, toggleTodo } = this.props;
    const { isEditing, text } = this.state;
    return (
      <div className="todo-item">
        <i
          onClick={() => toggleTodo(item.id, item.completed)}
          className={`icon-button  ${
            item.completed ? "fas fa-check-circle" : "far fa-circle"
          }`}
        />
        <input
          name="text"
          title="use double click for editation"
          value={text}
          onKeyPress={this.handleEdit}
          onBlur={this.handleEdit}
          onChange={this.handleChange}
          onDoubleClick={this.startEdit}
          readOnly={!isEditing}
          className={isEditing ? "input-editing" : "input-readonly"}
        />

        <i
          onClick={() => deleteTodo(item.id)}
          className="icon-button fas fa-trash"
        />
      </div>
    );
  }
}

export default connect(
  null,
  {
    deleteTodo,
    toggleTodo,
    editTodo
  }
)(TodoItem);

TodoItem.propTypes = {
  item: PropTypes.object,
  deleteTodo: PropTypes.func,
  editTodo: PropTypes.func,
  toggleTodo: PropTypes.func
};
