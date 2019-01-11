import * as ActionTypes from "../constants";

//action creators
export const fetchTodos = () => {
  return { type: ActionTypes.FETCH_TODOS.REQUEST };
};

export const addTodo = text => {
  return { type: ActionTypes.ADD_TODO.REQUEST, text };
};

export const deleteTodo = id => {
  return { type: ActionTypes.DELETE_TODO.REQUEST, id };
};

export const editTodo = (id, text) => {
  return { type: ActionTypes.EDIT_TODO.REQUEST, id, text };
};

export const toggleTodo = (id, completed) => {
  return { type: ActionTypes.TOGGLE_TODO.REQUEST, id, completed };
};

export const completeAll = ids => ({
  type: ActionTypes.COMPLETE_ALL.REQUEST,
  ids
});

export const deleteAllCompleted = ids => {
  return { type: ActionTypes.DELETE_ALL_COMPLETED.REQUEST, ids };
};

export const changeFilter = filter => {
  return { type: ActionTypes.CHANGE_FILTER, filter };
};

export const resetError = () => {
  return { type: ActionTypes.RESET_ERROR };
};
