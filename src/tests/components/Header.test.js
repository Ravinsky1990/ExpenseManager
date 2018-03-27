import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import Header from "../../components/Header";

test("should render Header correctly", ()=>{
    const wrapper = shallow(<Header />)
    expect(toJSON(wrapper)).toMatchSnapshot()

    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
})
