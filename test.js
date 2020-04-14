//class in es2015, es6 - syntactic sugar

class User{

    constructor(firstName, lastName, age, city)
    {
        this.FirstName = firstName,
        this.LastName = lastName,
        this.Age = age,
        this.City = city
    }
  
    getDetails(){
        //return this.FirstName;
        return this.Age;
    }

    getCity(){
        return this.City;
    }
  }
  
  let classObj = new User("Linh","asd",21, "New York");

  console.log(classObj.getDetails())
  console.log(classObj.getCity())