import filtersReducer from "../../reducers/filters";
import moment from "moment"

test("should set up default filters values",()=>{
    const state = filtersReducer(undefined,{type:"@@INIT"})
    expect(state).toEqual({
        text:"",
        sortBy:"date",
        startDate:moment().startOf("month"),
        endDate:moment().endOf("month"),
    });
})

test("should set up sortBy to amount",()=>{
    const state = filtersReducer(undefined, {type:'SORT_BY_AMOUNT'});

    expect(state).toEqual({
        text:"",
        sortBy:"amount",
        startDate:moment().startOf("month"),
        endDate:moment().endOf("month"),
    })
})

test("should set up sortBy to date",()=>{
    const currentState = {
        text:"",
        startDate:undefined,
        endDate:undefined,
        sortBy:"amount"
    };
    const action = {
        type:"SORT_BY_DATE",
    }
    const state = filtersReducer(currentState,action);
    expect(state.sortBy).toBe("date");
})

test("should set up text filter",()=>{
    const currentState = {
        text:"",
        startDate:undefined,
        endDate:undefined,
        sortBy:"amount"
    };
    const action = {
        type:"SET_TEXT_FILTER",
        text:"some"
    }
    const state = filtersReducer(currentState,action);
    expect(state.text).toBe("some");
})

test("should set up startDate filter",()=>{
    const startDate = moment();
    const action = {
        type:"SET_START_DATE",
        startDate
    }
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate)

})

test("should set up endDate filter",()=>{
    const endDate = moment();
    const action = {
        type:"SET_END_DATE",
        endDate
    }
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate)
})
