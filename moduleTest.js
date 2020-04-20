const heroes = [
    { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
    { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
    { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
    { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
    { name: 'Batman',         family: 'DC Comics', isEvil: false },
    { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
    { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
    { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
    { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
  ]
  
  const newHeroes = heroes.map(h => {
    h.name = h.name.toUpperCase()
    return h
  })
  
  //////////
  const newHeroes = heroes.map(h => {
    return {
      ...h,
      name: h.name.toUpperCase()
    }
  })
  
  let notEvil = heroes.filter(hero => hero.isEvil == false);  
  console.log(notEvil);  
  
  let uniqueFamilyName = heroes.reduce((prev, curr) => {  
      prev.add(curr.family);  
      return prev;  
  }, new Set());  
  console.log([...uniqueFamilyName]);
  
  function names(obj) {  
      return obj.map(o => 'Sir ' + o.name);  
  }  
  console.log(names(heroes));
  
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