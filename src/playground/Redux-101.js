import {createStore} from "redux";

// Action generators

const incrementCount = ({ incrementBy = 1 }={}) =>({
    type:"INCREMENT",
    incrementBy,
})


const decrementCount = ({ decrementBy = 1 }={}) =>({
    type:"DECREMENT",
    decrementBy,
})

const reset = () =>({
    type:"RESET",
})

const set = ({ count }={}) =>({
    type:"SET",
    count,
})


// Redusers

const countReduser = (state={count:0}, action)=>{
    switch(action.type){
    case "INCREMENT":
        return{
            count: state.count + action.incrementBy,
        };
    case "DECREMENT":
        return{
            count: state.count - action.decrementBy,
        };
    case "RESET":
        return{
            count:0,
        };
    case "SET":
        return{
            count:action.count,
        }    
    default:
        return state
    }
};

//
const store = createStore(countReduser);

// 

store.subscribe(()=>{
    console.log(store.getState())
})


// Dispatches

store.dispatch(incrementCount({incrementBy:5}))

store.dispatch(decrementCount({decrementBy:4}))

store.dispatch(reset())

store.dispatch(set({count:10}))









