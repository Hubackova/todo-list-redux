import { createSelector } from "reselect";
import { SHOW_COMPLETED, SHOW_ACTIVE } from "../constants";

const getVisibilityFilter = state => state.visibilityFilter;
const getTodos = state => state.todos;

export const getFetchingState = state => state.isFetching;
export const getErrorState = state => state.error;
export const getFilter = state => state.visibilityFilter;

export const getCompletedCount = createSelector(
  getTodos,
  todos => {
    const completed = todos.filter(todo => todo.completed);
    return completed.length;
  }
);

export const getIncompletedIds = createSelector(
  getTodos,
  todos => {
    const incompletedIds = todos.filter(todo => !todo.completed).map(i => i.id);
    return incompletedIds;
  }
);

export const getCompletedIds = createSelector(
  getTodos,
  todos => {
    const completedIds = todos.filter(todo => todo.completed).map(i => i.id);
    return completedIds;
  }
);

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case SHOW_COMPLETED:
        return todos.filter(todo => todo.completed);
      case SHOW_ACTIVE:
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }
);
