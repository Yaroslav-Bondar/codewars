var Ball = function(ballType) {
    if (ballType === undefined) {
        this.ballType = 'regular'
    }
    else {
        this.ballType = ballType;
    }
};
let obj = new Ball();
console.log(obj.ballType);

// https://www.codewars.com/kata/53f0f358b9cb376eca001079/train/javascript
// Test.assertEquals(new Ball().ballType, "regular");
// Test.assertEquals(new Ball("super").ballType, "super");

// Description:
// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"
// FUNDAMENTALSCLASSESBASIC LANGUAGE FEATURESOBJECT-ORIENTED PROGRAMMINGOBJECTS