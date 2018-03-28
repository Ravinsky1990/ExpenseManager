import React from "react";
import {shallow} from "enzyme";
import {ExpensesSummary} from "../../components/ExpensesSummary";

test("should correktly render ExpensesSummary with 1 ex",()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />)
    expect(wrapper).toMatchSnapshot()
})

test("should correktly render ExpensesSummary with multiple expenses",()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={17} expensesTotal={2355656556} />)
    expect(wrapper).toMatchSnapshot()
})