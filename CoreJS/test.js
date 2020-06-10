function sum(x, y) {
    if (y !== undefined) {
      return x + y;
    } else {
      return function(y) { return x + y; };
    }
}

console.log(sum(2,3)); //

console.log(sum(2)(3)); //


// class Counter{
//     start(){
//         this.count = 0;
//         let scope = this;

//         setInterval(function () {
//             //console.log(this.count);
//             //this.count++;
//             scope.count++;
//             console.log(scope.count);
//             //console.log(this.count);
//         }, 500);

//         // setInterval(() => {
//         //     this.count++;
//         //     console.log(this.count);
//         // }, 500);
//     }
// }

// let cObj = new Counter();
// cObj.start();

























// let userDetails = [
// {id : 3, name : "Roger", city : "LAX", savedby : "CaptainAmerica" },  
// {id : 4, name : "Adam", city : "BOS", savedby : "IronMan" },  
// {id : 5, name : "Alex", city : "MAA", savedby : "SpiderMan" }  
// ];  
// let userDetailsStringified = JSON.stringify(userDetails)  
// console.log("2: AFTER userDetailsStringified : \n\n" + userDetailsStringified + "\n")  
// let fs = require("fs");  
// let writerStream = fs.createWriteStream('./OUT.UserDetails.json')  
// writerStream.write(userDetailsStringified, 'UTF8') // Write the data to stream with encoding to be utf8  
// writerStream.end() // Mark the end of file  
// // Handle stream events --> finish, and error  
// writerStream.on('finish', function() { console.log("3. FINISHED writing (Async). \n") })  
// writerStream.on('error', function(err) { console.log("4. err.stack = ", err.stack, "\n") })  
// console.log("5. END of WriteStream code. \n");  
// // https://jsonformatter.org/


// // async and sync file read operation

// console.log( __filename );
// console.log( __dirname );


// let fsObj = require("fs");
// //let event = require("event"); //custom events and use

// console.log("moduleTest.js File is about to read");

// //let data = fsObj.readFileSync("moduleTest.js","UTF8"); //blocking execution //synchronous
// //console.log(data);

// //asynchronous way of execution
// fsObj.readFile("moduleTest.js","UTF8",(err, data)=>{
//     console.log("Error :", err);
//     console.log("Data : ", data);
// })

// console.log("moduleTest.js File is completed"); //ctrl+c