const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

export const FETCH_TODOS = createRequestTypes("FETCH_TODOS");
export const DELETE_TODO = createRequestTypes("DELETE_TODO");
export const ADD_TODO = createRequestTypes("ADD_TODO");
export const EDIT_TODO = createRequestTypes("EDIT_TODO");
export const TOGGLE_TODO = createRequestTypes("TOGGLE_TODO");
export const COMPLETE_ALL = createRequestTypes("COMPLETE_ALL");
export const DELETE_ALL_COMPLETED = createRequestTypes("DELETE_ALL_COMPLETED");

export const API_CALL_FAILURE = "API_CALL_FAILURE";
export const RESET_ERROR = "RESET_ERROR";
export const CHANGE_FILTER = "CHANGE_FILTER";
export const SHOW_ALL = "SHOW_ALL";
export const SHOW_COMPLETED = "SHOW_COMPLETED";
export const SHOW_ACTIVE = "SHOW_ACTIVE";
