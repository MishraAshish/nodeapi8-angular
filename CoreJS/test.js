// async and sync file read operation

console.log( __filename );
console.log( __dirname );


let fsObj = require("fs");
//let event = require("event"); //custom events and use

console.log("moduleTest.js File is about to read");

//let data = fsObj.readFileSync("moduleTest.js","UTF8"); //blocking execution //synchronous
//console.log(data);

//asynchronous way of execution
fsObj.readFile("moduleTest.js","UTF8",(err, data)=>{
    console.log("Error :", err);
    console.log("Data : ", data);
})

console.log("moduleTest.js File is completed"); //ctrl+c