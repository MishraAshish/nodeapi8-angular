//arrow function/ fat arrow function - most important

//2. resolves context for the function, how?
var user = {
    id: 42,
    printId: function () {
        //this - user
        console.log(this);
        let that = this;
        setTimeout(function() { //global
            console.log("InSide SetTimeOut ",this);
            console.log(this.id);
            console.log(that.id);//using that as outer context
        }.bind(this), 1000); //using bind to set context back to user from global

        //arrow function
        setTimeout(() => {
            console.log(this.id);
        }, 2000);
    }
};

user.printId();

//printId.call(user);
//printId.apply(user,...arg);
//printId.bind(user,...arg); - delay