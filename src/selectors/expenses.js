import moment from "moment";

//Visible expenses

export default (expenses, {text, sortBy, startDate, endDate})=>{
    return expenses.filter((expense)=>{
        const createAtmoment = moment(expense.createAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createAtmoment, "day") : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createAtmoment, "day") : true; 
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b)=>{
        if (sortBy === "date"){
            return a.createAt < b.createAt ? 1 : -1;
        } else if(sortBy ==="amount"){
            return a.amount < b.amount ? 1 : -1;
        }
    });
}
