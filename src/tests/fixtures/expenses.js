import moment from "moment"

export default [{
    id:"1",
    description:"Gum",
    note:"",
    amount:200,
    createAt:0
},{
    id:"2",
    description:"Rent",
    note:"",
    amount:30000,
    createAt:moment(0).subtract(4,"days").valueOf()
},{
    id:"3",
    description:"Credit card",
    note:"",
    amount:40000,
    createAt:moment(0).add(4,"days").valueOf()
}
]