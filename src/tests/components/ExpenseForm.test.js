import React from "react";
import {shallow} from "enzyme";
import moment from "moment";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";

test("should render ExpenseForm correctly", ()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot()
})

test("should render ExpenseForm correctly with data", ()=>{
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot()
})

test("should render ExpenseForm for ivalid form submission",()=>{
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("form").simulate("submit",{
        preventDefault: ()=>{}
        
    });
    expect(wrapper.state("error").length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

test("should set description on input change", ()=>{
    const value = "New description"
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(0).simulate("change",{
        target:{value}
    });
    expect(wrapper.state("description")).toBe(value)
})

test("should set note to textarea",()=>{
    const value = "New not"
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("textarea").at(0).simulate("change",{
        target:{value}
    });
    expect(wrapper.state("note")).toBe(value)
})
//amount
test("should set amount if valid", ()=>{
    const value = "23.59"
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(1).simulate("change",{
        target:{value}
    });
    expect(wrapper.state("amount")).toBe(value)
})

test("should set amount if In_valid", ()=>{
    const value = "23.666"
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(1).simulate("change",{
        target:{value}
    });
    expect(wrapper.state("amount")).toBe('')
})

test("should call onSubmit prop for valid form submission",()=>{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find("form").simulate("submit",{
        preventDefault:()=>{}
    });
    expect(wrapper.state("error")).toBe("");
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:expenses[0].description,
        amount:expenses[0].amount,
        note:expenses[0].note,
        createAt:expenses[0].createAt
    })
})

test("should set new dete on date change",()=>{
    const now = moment()
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("SingleDatePicker").prop("onDateChange")(now);
    expect(wrapper.state("createAt")).toEqual(now);
})

test("should set calendar focus on change", ()=>{
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("SingleDatePicker").prop("onFocusChange")({focused});
    expect(wrapper.state("calendarfocused")).toBe(focused);
})


