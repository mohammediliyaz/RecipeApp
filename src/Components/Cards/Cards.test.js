import React from "react";
import  {  shallow } from "enzyme";

import Cards from "./Cards";

describe("cards component", () => {
  const imageName = "recipeThumb-01";
  
  it("should  the show image", () => {
    const wrapper = shallow(<Cards image={imageName} />);
    console.log(wrapper.debug());
    wrapper.find(".Img");
  });

  it("should  the show state initailly", () => {
    const setShow = jest.fn();
    const wrapper = shallow(<Cards image={imageName} onMouseEnter={setShow} />);
    wrapper.find(".Img");
    expect(setShow).toBeFalsy;
  });

  it("should update the show state to be true", () => {
    const setShow = jest.fn();
    const wrapper = shallow(<Cards image={imageName} />);
    wrapper.find(".Img").simulate("onMouseEnter");
    expect(setShow).toBeTruthy();
  });

  it("should update the show state to be false", () => {
    const setShow = jest.fn();
    const wrapper = shallow(<Cards image={imageName} />);
    wrapper.find(".Img").simulate("onMouseEnter");
    expect(setShow).toBeFalsy;
  });
  it("should update the show state to be false onMouseLeave", () => {
    const setShow = jest.fn();
    const wrapper = shallow(<Cards image={imageName} />);
    wrapper.find(".Img").simulate("onMouseLeave");
    expect(setShow).toBeFalsy;
  });
});
