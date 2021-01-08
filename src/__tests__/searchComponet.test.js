import React from "react";
import Enzyme, { shallow, mount } from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import Search from "../Components/layout/Search";

Enzyme.configure({ adapter: new Adapter() });

describe("Seacrch component", () => {
  it("should get the initial search value", () => {
    const clickHandler = jest.fn();
    let wrapper = shallow(<Search clickHandler={clickHandler} />);
    expect(wrapper.find(".InputField").text()).toEqual("");
  });

  it("should get the search typed value", () => {
    const clickHandler = jest.fn();
    const text = "Search";
    let wrapper = shallow(<Search clickHandler={clickHandler} />);
    const input = wrapper.find(".InputField");

    input.simulate("change", {
      target: { name: "searchText", value: text },
    });

    expect(wrapper.find(".InputField").prop("value")).toBe(text);
  });
});
