import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import { App } from "../components/App";

//component-test example
describe("App", () => {
  it("should render self", () => {
    const mockfetchTodos = () => [];
    const wrapper = shallow(<App fetchTodos={mockfetchTodos} />);
    expect(wrapper.find("div").hasClass("App")).equal(true);
  });
});
