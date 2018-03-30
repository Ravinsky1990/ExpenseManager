const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Resolve data")
    }, 6000)
})

console.log("before")

promise.then((data)=>{
    console.log(data)
})

console.log("after")