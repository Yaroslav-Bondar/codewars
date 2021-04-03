function encode(string) {
    let code = {a:1, e:2, i:3, o:4, u:5};
    let res;
    res = string.split('').reduce((str, val) => {
        if (val.match(/[aeiou]/) != null) {
            str += code[val];
        }
        else {
            str += val;
        }
        return str;    
    },'');
    console.log(res);        
}
function decode(string) {
    let code = {1:'a', 2:'e', 3:'i', 4:'o', 5:'u'};
    let res;
    res = string.split('').reduce((str, val) => {
        if (val.match(/[1-5]/) != null) {
            str += code[val];
        }
        else {
            str += val;
        }
        return str;    
    },'');
    console.log(res);        
}
// encode('hello');
// encode('How are you today?');
// 'H4w 1r2 y45 t4d1y?');
decode('h2ll4');
//  'hello');

/*  https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript
Description:
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

FUNDAMENTALSARRAYSSTRINGSFUNCTIONSCONTROL FLOWBASIC LANGUAGE FEATURESREGULAR EXPRESSIONSDECLARATIVE PROGRAMMINGADVANCED LANGUAGE FEATURES */