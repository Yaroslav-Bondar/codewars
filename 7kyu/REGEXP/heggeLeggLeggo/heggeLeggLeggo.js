function heggeleggleggo(word){
    let res;
    res = word.replace(/[BCDFGHJKLMNPQRSTVWXYZ]/gi, x => x + 'egg');
    console.log(res);
}
heggeleggleggo("hello");
//  "heggeleggleggo"

/* https://www.codewars.com/kata/55ea5304685da2fb40000018/train/javascript
Description:
Egg Talk.

Insert an "egg" after each consonant. If there are no consonants, there will be no eggs. Argument will consist of a string with only alphabetic characters and possibly some spaces.

eg:

hello => heggeleggleggo

eggs => egegggeggsegg

FUN KATA => FeggUNegg KeggATeggA

////

This Kata is designed for beginners to practice the basics of regular expressions. With this in mind a little bit of commenting in your solution could be very useful.

Check Eloquent Javascript p176

https://regex101.com/#javascript

FUNDAMENTALSREGULAR EXPRESSIONSDECLARATIVE PROGRAMMINGADVANCED LANGUAGE FEATURESSTRINGS */