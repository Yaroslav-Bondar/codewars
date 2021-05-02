class Dictionary {
    constructor() {
      this.dict = {}
    }
    
    newEntry(key, value) {
      this.dict[key] = value
    }
    
    look(key) {
      if(key in this.dict) {
          console.log(this.dict[key])
      }
      else {
        console.log(`Can't find entry for ${key}`)
      }
    }
}

let d = new Dictionary()
d.newEntry('Apple', 'is good fruit')
d.look('Apple')
d.look('Banana')
console.log(d.dict)
/* https://www.codewars.com/kata/57a93f93bb9944516d0000c1/train/javascript
Description:

In this kata, your job is to create a class Dictionary which you can add words to and their entries. Example:

>>> let d = new Dictionary();

>>> d.newEntry("Apple", "A fruit that grows on trees");

>>> console.log(d.look("Apple"));
A fruit that grows on trees

>>> console.log(d.look("Banana"));
Can't find entry for Banana

Good luck and happy coding!
Fundamentals
Classes
Basic Language Features
Object-oriented Programming
 */