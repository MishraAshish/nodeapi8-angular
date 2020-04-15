//Promise : pending, fullfilled/resolved, rejected



let promise = new Promise((resolve, reject) =>{    
    //simulating call to server - an async operation

    //an async operation (call to user login)
        //success /failed/ error
            //showaccount-callback
            //logout-callback

    setTimeout(() => {
        //resolve("any value")
        resolve({
            "status":200,
            "message":"User Signed Successfully",
            "token":"sdasdasdjashj595923dabjdas"
        })

        // reject({
        //     "status":400,
        //     "message":"User Logged Out Successfully"
        // })
    }, 2000);

});

console.log("Status 1 : ", promise); //expected : pending

promise.then((value)=> {  
    console.log("Then ", value);  
}).catch((value) => {  
    console.log("Catch ",value);  
});
         
console.log("Status 2 : ", promise);// expected output: [object Promise]