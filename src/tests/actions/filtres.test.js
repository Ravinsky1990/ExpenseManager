import {setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount} from "../../actions/filtres";
import moment from "moment";

test("test start_day action object",()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:"SET_START_DATE",
        startDate:moment(0)
    })
})


test("test end_day action object",()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:"SET_END_DATE"  ,
        endDate:moment(0)
    })
})

test("test text_filter action object with value", ()=>{
    const text = "Something in"
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: "Something in"
    })
})

test("test text_filter action object with default", ()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    })
})

test("test filter_sort_by_date action object with",()=>{
    expect(sortByDate()).toEqual({
        type:"SORT_BY_DATE"
    })
})

test("test filter_sort_by_amount action object with",()=>{
    expect(sortByAmount()).toEqual({
        type:"SORT_BY_AMOUNT"
    })
})
