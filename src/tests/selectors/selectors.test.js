import selectEspenses from "../../selectors/expenses";
import moment from "moment";
import expenses from "../fixtures/expenses";


test("should filter by text value", ()=>{
    const filters = {
        text:"e",
        sortBy:"date",
        startDate:undefined,
        endDate:undefined
    }

    const result = selectEspenses(expenses,filters);

    expect(result).toEqual([expenses[2],expenses[1]])
})


test("should filter by start date", ()=>{
    const filters = {
        text:"",
        sortBy:"date",
        startDate:moment(0),
        endDate:undefined
    }

    const result = selectEspenses(expenses,filters)
    expect(result).toEqual([expenses[2], expenses[0]])
})


test("should filter by end date", ()=>{
    const filters = {
        text:"",
        sortBy:"date",
        startDate:undefined,
        endDate:moment(0).add(2, "days"),
    }
    const result = selectEspenses(expenses,filters)
    expect(result).toEqual([expenses[0], expenses[1]])
})

test("should filter sort by date",()=>{
    const filters = {
        text:"",
        sortBy:"date",
        startDate:undefined,
        endDate:undefined
    }
    const result = selectEspenses(expenses,filters)
    expect(result).toEqual([expenses[2], expenses[0],expenses[1]])
})

test("should filter sort by amount",()=>{
    const filters = {
        text:"",
        sortBy:"amount",
        startDate:undefined,
        endDate:undefined
    }
    const result = selectEspenses(expenses,filters)
    expect(result).toEqual([expenses[2], expenses[1],expenses[0]])
})
