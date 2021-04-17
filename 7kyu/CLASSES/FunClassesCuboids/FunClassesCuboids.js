class Cuboid {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    get surfaceArea() {
        // console.log(this.length * this.length);
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
    get volume() {
        console.log(this.height * this.length * this.width);
        return this.height * this.length * this.width;
    }
}
class Cube extends Cuboid {
    constructor(length, width, height) {
        super(length, width, height)
        this.length = length;
        this.width = length;
        this.height = length;
    }
}
let cubo = new Cuboid(12, 12, 12);
// cubo.surfaceArea;
// cubo.volume
// console.log(cubo.length);
// console.log(cubo.width);
// console.log(cubo.height);
let cube = new Cube(1)
console.log(cube.length);
console.log(cube.width);
console.log(cube.height);
cube.surfaceArea
// cube.volume
/* https://www.codewars.com/kata/56fbdda707cff41b68000de2/train/javascript
Fun with ES6 Classes #3 - Cuboids, Cubes and Getters
Task
Define the following classes.

I. Cuboid
The object constructor for the class Cuboid should receive exactly three arguments in the following order: length, width, height and store these three values in this.length, this.width and this.height respectively.

The class Cuboid should then have a getter surfaceArea which returns the surface area of the cuboid and a getter volume which returns the volume of the cuboid.

II. Cube
class Cube is a subclass of class Cuboid. The constructor function of Cube should receive one argument only, its length, and use that value passed in to set this.length, this.width and this.height.

Hint: Make a call to super, passing in the correct arguments, to make life easier ;)

Related Articles
Listed below are a few articles of interest that may help you complete this Kata:

Stack Overflow - What are getters and setters in ES6?
getter - Javascript | MDN
FUNDAMENTALSCLASSESBASIC LANGUAGE FEATURESOBJECT-ORIENTED PROGRAMMINGES2015BABELINHERITANCEPOLYMORPHISM
*/

