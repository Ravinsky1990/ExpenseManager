const me = {
    name: "Yura",
    age: 27,
    location:{
        city:"Vinitsa",
        temp:10,
    }
};

const {name = 'someone', age} = me
const{city,temp:temperature} = me.location

console.log(`${name} is ${age}`)
console.log(`${city} is ${temperature} c`)

//Array destructuring

