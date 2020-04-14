class User{
    constructor(firstName, lastName, age, city){
        this.FirstName = firstName,
        this.LastName = lastName,
        this.Age = age,
        this.City = city
    }
  
    getDetails(){
        return this.FirstName;
    }
  }
  
  let classObj = new User("Anu");
  console.log(classObj.getDetails())


var user = {
    name:"Richard",
    age: 25,
    name2: "Linh"
}

var user2 = new Object({
    name:"Richard",
    age: 25,
    name2: "Linh"
});

var user3 = {
    subject:"MERNStack",
    name:"Himavan"
}

//user3 = Object.create(user2); //creates an object with prototype chain

//var user3 = Object.create(null); //to break the prototype chain or stop inheritance we use null
Object.assign(user3, user2);

module.exports = user3;