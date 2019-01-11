import reducer from "../reducer";
import * as ActionTypes from "../constants";
import { expect } from "chai";

describe("todos reducer", () => {
  const initialState = {
    isFetching: false,
    todos: [],
    visibilityFilter: ActionTypes.SHOW_ALL,
    error: null
  };
  it("returns the initial state", () => {
    expect(reducer(undefined, {})).to.deep.equal(initialState);
  });
  it("should handle ADD_TODO", () => {
    expect(
      reducer(
        { visibilityFilter: ActionTypes.SHOW_ALL },
        {
          type: ActionTypes.CHANGE_FILTER,
          filter: ActionTypes.SHOW_COMPLETED
        }
      )
    ).to.deep.equal({
      visibilityFilter: ActionTypes.SHOW_COMPLETED
    });
  });
});
