// OOP - object oriented programing
// classes and instances
// class- blueprint of the obejct
// 

// how to model the classes 
// class User{
//     constructor (name, email) {
//         this.name= name
//         this.email = email
//     }
// }

// Abstraction - 
// Encapsulation - keeping method and properties private inside the class
// inheritance - ex user and admin child class extend the properties of parent class
// polymorphism - 

// OOP in JS
/*
prototypes - 

how to create prototypes
1 contructor function
2 ES6 CLasses
3 Object.create()

*/

// constructor

const Person = function (firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
}

const personObj = new Person("Mahesh", 2000);
// console.log(personObj)
// empty object {} get created,
// function get called this=> 
// {} linked with prototype
//  function automatically return {} 

const matela = new Person("Matela", 1999)
// console.log(matela)
// object created from class is called instance

console.log(Person.prototype)

// Prototypes/////////////////////////////////////////////////////////////
Person.prototype.clacAge = function () {
    console.log(2030 - this.birthYear)
}
// const matela = new Person("Matela", 1999)
personObj.clacAge();
matela.clacAge();

// how it work
// 

console.log(personObj.__proto__)
// new Operator 

// console.log(Person.hasOwnProperty("calcAge"))

const array = [0, 1, 2]
const array2 = [2, 4, 6]

Array.prototype.maxNum = function () {
    let mn = this.sort((a, b) => b - a)[0]
    return mn
}
// console.log(array)

console.log(array.maxNum())
console.log(array2.maxNum())

// console.log(Array.prototype.hasOwnProperty('maxNum'))




// console.log(array.)



// built on object
// console.log(personObj.__proto__.__proto__)