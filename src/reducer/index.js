import * as ActionTypes from "../constants";

const initialState = {
  isFetching: false,
  todos: [],
  visibilityFilter: ActionTypes.SHOW_ALL,
  error: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_TODOS.REQUEST:
      return {
        ...state,
        fetching: true
      };

    case ActionTypes.FETCH_TODOS.SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        todos: action.payload
      };

    case ActionTypes.DELETE_TODO.SUCCESS:
      return {
        ...state,
        error: null,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };

    case ActionTypes.EDIT_TODO.SUCCESS:
      return {
        ...state,
        error: null,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, text: action.text } : todo
        )
      };

    case ActionTypes.ADD_TODO.SUCCESS:
      return {
        ...state,
        error: null,
        todos: [action.payload, ...state.todos]
      };

    case ActionTypes.TOGGLE_TODO.SUCCESS:
      return {
        ...state,
        error: null,
        todos: state.todos.map(todo => {
          return todo.id === action.payload.id ? action.payload : todo;
        })
      };

    case ActionTypes.COMPLETE_ALL.SUCCESS:
      return {
        ...state,
        error: null,
        todos: state.todos.map(todo => {
          return todo.completed ? todo : { ...todo, completed: true };
        })
      };

    case ActionTypes.DELETE_ALL_COMPLETED.SUCCESS:
      return {
        ...state,
        error: null,
        todos: state.todos.filter(todo => !todo.completed)
      };

    case ActionTypes.CHANGE_FILTER:
      const { filter } = action;
      return {
        ...state,
        visibilityFilter: filter
      };

    case ActionTypes.API_CALL_FAILURE:
      const { err } = action;
      return {
        ...state,
        fetching: false,
        error: err ? err.data : "Something awful happend"
      };

    case ActionTypes.RESET_ERROR:
      return {
        ...state,
        error: null
      };

    default:
      return state;
  }
}

export default reducer;
