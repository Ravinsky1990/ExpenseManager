import React from "react";
import {connect} from "react-redux";
import {DateRangePicker} from "react-dates";
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from "../actions/filtres";

export class ExpenseListFilters extends React.Component{
    state ={
        calendarFocused:null
    };
    onDatesChange = ({startDate, endDate}) =>{
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    };
    onFocusChange = (calendarFocused) =>{
        this.setState(()=>({
            calendarFocused
        }))
    }
    onTextCange = (ev)=>{
        this.props.setTextFilter(ev.target.value)
    }
    onSortChange = (ev)=>{
        if (ev.target.value == "date"){
            this.props.sortByDate()
        }
        else if (ev.target.value == "amount"){
            this.props.sortByAmount()
        }
    }


    render(){
        return(
            <div>
                <input type="text" value={this.props.filters.text} onChange={this.onTextCange} />
                <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                startDate ={this.props.filters.startDate}
                endDate ={this.props.filters.endDate}
                onDatesChange ={this.onDatesChange}
                focusedInput ={this.state.calendarFocused}
                onFocusChange = {this.onFocusChange}
                showClearDates = {true}
                numberOfMonths = {1}
                isOutsideRange = {()=> false}
                
                />
            </div>
        )
        
    }
}

//connect to store

const mapStateToProps =(state)=>{
    return{
        filters:state.filters
    }
}

const mapDispatchToProps = (dispatch)=>({
    setTextFilter: (text)=>dispatch(setTextFilter(text)),
    sortByDate: ()=>dispatch(sortByDate()),
    sortByAmount: ()=>dispatch(sortByAmount()),
    setStartDate: (startDate)=> dispatch(setStartDate(startDate)),
    setEndDate: (endDate)=>dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)