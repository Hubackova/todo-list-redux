import { expect } from "chai";

import * as actions from "../actions";
import * as types from "../constants";

//action-test example
describe("actions", () => {
  it("should create an action to add a todo", () => {
    const text = "Buy notebook";
    const expectedAction = {
      type: types.ADD_TODO.REQUEST,
      text
    };
    expect(actions.addTodo(text)).to.deep.equal(expectedAction);
  });
});
