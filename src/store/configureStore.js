import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import expensesReducer from "../reducers/expenses";
import filterReducer from "../reducers/filters";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default ()=>{
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducer,  
        }),
        //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}

