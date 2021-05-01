// "use strict";

function User(name) {
  this.name = name;

  this.sayHi = function() {
    console.log( "Меня зовут: " + this.name );
  };
//   get fullName() {
//     console.log( "getter full name " + this.name );
//     // return `${this.name}`;
//   };
}

let vasya = new User("Вася");

vasya.sayHi(); // Меня зовут: Вася
// vasya.fullName