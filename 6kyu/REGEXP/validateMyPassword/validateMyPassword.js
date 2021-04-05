function validPass(password) {
    let isDigit = new RegExp('\\d');
    let isLetter = new RegExp('[a-z]');
    let isSpecial = new RegExp('[^a-z0-9]', 'i');
    if (password.length > 3 && password.length < 20 && !isSpecial.test(password)) {
        if (isDigit.test(password) && isLetter.test(password)) {
            return 'VALID';
        }
        else {
            return 'INVALID';
        }
    }
    else {
        return 'INVALID'
    }
}
validPass('Username123');
// validPass('ThisPasswordIsTooLong1234');
// validPass('a12');
// validPass('Username123');

/* https://www.codewars.com/kata/59c01248bf10a47bd1000046/train/javascript
Description:
I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.

Passwords must abide by the following requirements:

More than 3 characters but less than 20.

Must contain only alphanumeric characters.

Must contain letters and numbers.

FUNDAMENTALSREGULAR EXPRESSIONSDECLARATIVE PROGRAMMINGADVANCED LANGUAGE FEATURESSTRINGSCONDITIONAL STATEMENTSCONTROL FLOWBASIC LANGUAGE FEATURESLOOPS */