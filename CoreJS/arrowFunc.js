//global

var user = {
    id: 42,

    printId: () => {
        console.log(this)
        //arrow function
        setTimeout(() => {
            console.log(this.id);
        }, 2000);
    }
};

user.printId();