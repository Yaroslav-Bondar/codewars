function touchType(str) {
    let lLetDig = /[qwertasdfgzxcvb12345]/g;
    let lRig = /[^L\s]/g;
    // (?<=[qwertasdfgzxcvb])\s
    let rWhiteSpace = /(?<=L)\s/g;
    let lWhiteSpace = /[^RL]/g;
    let res = str.replace(lLetDig, 'L');
    console.log(res);
    res = res.replace(lRig, 'R');
    console.log(res);
    res = res.replace(rWhiteSpace, 'R');
    console.log(res);
    res = res.replace(lWhiteSpace, 'L');
    console.log(res);
}
touchType('i love programming');

/* https://www.codewars.com/kata/57b9d705f302997e61000157/train/javascript
Description:
In this kata you're given a string which can include English lowercase letters, digits, and spaces. Your task is to write a function which will return a string of 'L' and 'R' chars which displays in which order should the hands be used to type it.

Rules of touch typing
The digits before (including) 5, letters of the first row before (including) t, letters of the second row before (including) g and letters of the third row before (including) b are typed with left hand, the other digits and numbers are typed with right hand.
Space is typed with left hand if the non-space char you typed before was typed with right one, and vice versa. If it is the first char, it's typed with left hand.
Every string you're given is a correct string which includes only digits, lowercase letters and spaces. Strings need not be validated.

Examples
"i love programming" -> "RLRRLLRRLRLLLRRRRL"
" two spaces" -> "LLLLRLLRLLLL"

Good luck!
ALGORITHMSREGULAR EXPRESSIONSDECLARATIVE PROGRAMMINGADVANCED LANGUAGE FEATURESFUNDAMENTALSSTRINGS
*/