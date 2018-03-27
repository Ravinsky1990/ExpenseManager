import React from "react";
import  moment from "moment";
import {SingleDatePicker} from "react-dates";


export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            description: props.expense ? props.expense.description : "",
            note: props.expense ? props.expense.note : "",
            amount: props.expense ? (props.expense.amount/100).toString() : "",
            createAt: props.expense ? moment(props.expense.createAt): moment(),
            calendarfocused: false,
            error: ""
        }
    }
    
    onDescriptionChange = (ev) =>{
        const description = ev.target.value;
        this.setState(()=>({description}))
    };
    onNoteChange = (ev)=>{
        const note = ev.target.value
        this.setState(()=>({note}))
    };
    onAmountChage = (ev)=>{
        const amount = ev.target.value;
        if(amount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(()=>({amount}))
        }
    }
    onDateChange = (createAt) =>{
        if(createAt){
            this.setState(()=>({createAt}))
        }
    }
    onFocusChange= ({focused})=>{
        this.setState(()=>({calendarfocused:focused}))
    }
    onSubmit = (ev)=>{
        ev.preventDefault();
        if(!this.state.description || !this.state.amount){
            //set error masege
            this.setState(()=>({error:"Please provide description and amount"}))
        }
        else{
            //cleare error
            this.setState(()=>({error:""}))
            this.props.onSubmit({
                description:this.state.description,
                amount: parseFloat(this.state.amount,10)*100,
                createAt: this.state.createAt.valueOf(),
                note: this.state.note

            })
        }
    }

    render(){
        return (
            <div>
                <p>{this.state.error}</p>
                <form onSubmit={this.onSubmit}>
                    <input type="text"
                    placeholder="Description"
                    autoFocus value={this.state.description}
                    onChange={this.onDescriptionChange} />
                    
                    <input type="text"
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChage}
                     />

                     <SingleDatePicker
                     date = {this.state.createAt }
                     onDateChange ={this.onDateChange}
                     focused ={this.state.calendarfocused}
                     onFocusChange ={this.onFocusChange}
                     numberOfMonths = {1}
                     isOutsideRange = {()=>false}
                     />
                    <textarea placeholder="Add a note to your expense (optional)"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                    ></textarea>

                    <button>Edd Expense</button>
                </form>
            </div>
        )
    }
}