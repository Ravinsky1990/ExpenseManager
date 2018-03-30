import {startAddExpense, addExpense, editExpense, removeExpense} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk])

test("should setup remove expense action object", ()=>{
    const action = removeExpense({id:"123abc"});
    expect(action).toEqual({
        type:"REMOVE_EXPENSE",
        id: "123abc"
    })
})


test("should setup edit expense action object", ()=>{
    const action = editExpense("123abc",{note:"new note!"});
    expect(action).toEqual({
        type:"EDIT_EXPENSE",
        id:"123abc",
        updates:{
            note:"new note!"
        }
    })
})


test("should setup add expense action object with provided values", ()=>{
    
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense:expenses[2]
    })
})

test("should add expense to database and store",(done)=>{
    const expenseData= {
        description:"Mouse",
        amount:3000,
        note:"YYYYYYYjk",
        createAt:1000
    }
    const store = createMockStore({});
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:"ADD_EXPENSE",
            expense:{
                id:expect.any(String),
                ...expenseData
            }
        });

    return  database.ref(`expenses/${actions[0].expense.id}`).once("value");
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done()
    });
});

test("should add expense with defaults to database and store",(done)=>{
    const expenseDefaulte= {
        description:"",
        amount:0,
        note:"",
        createAt:0
    }
    const store = createMockStore({});
    store.dispatch(startAddExpense({})).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:"ADD_EXPENSE",
            expense:{
                id:expect.any(String),
                ...expenseDefaulte
            }
        });

    return  database.ref(`expenses/${actions[0].expense.id}`).once("value");
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseDefaulte);
        done()
    });
});




