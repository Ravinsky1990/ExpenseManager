export default (expenses)=>{
    if(expenses.length === 0){
        return 0;
    }else{
        return expenses.map((expense)=>{
            return expense.amount
        }).reduce((sum,value)=>{
            return sum+value
        },0)
    }
}