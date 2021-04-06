function numericFormatter(temp, str) {
    let res, i = 0, digit = 1;
    function getDigit (x) {
        if (digit > 9)
            digit = 0;
        x = digit;
        digit++;
        return x; 
    }
    res = temp.replace(/[a-z]/gi, (x) => {
        if (str !== undefined) {
            if (str[i] !== undefined) {
                x = str[i];
                i++;
                return x;
            }
            else {
                if (str[i] === undefined)
                    i = 0
                x = str[i];
                i++;
                return x;    
            }
        } 
        else {
            return getDigit(x);
        }
    });
    console.log(res);
}
// numericFormatter("xxx xxxxx xx", "5465253289");
numericFormatter("xxx xxxxx xx", "5");
// numericFormatter("+555 aaaa bbDb f f ffff", "");
numericFormatter("xxx xxxxx xx");
numericFormatter('kTFfyfBxnU0v-', '7114955189');

/*
https://www.codewars.com/kata/59901fb5917839fe41000029/train/javascript
Description:
Your goal is to create a function to format a number given a template; if the number is not present, use the digits 1234567890 to fill in the spaces.

A few rules:

the template might consist of other numbers, special characters or the like: you need to replace only alphabetical characters (both lower- and uppercase);
if the given or default string representing the number is shorter than the template, just repeat it to fill all the spaces.
A few examples:

numericFormatter("xxx xxxxx xx","5465253289") === "546 52532 89"
numericFormatter("xxx xxxxx xx") === "123 45678 90"
numericFormatter("+555 aaaa bbbb", "18031978") === "+555 1803 1978"
numericFormatter("+555 aaaa bbbb") === "+555 1234 5678"
numericFormatter("xxxx yyyy zzzz") === "1234 5678 9012"
ALGORITHMSNUMBERSREGULAR EXPRESSIONSDECLARATIVE PROGRAMMINGADVANCED LANGUAGE FEATURESFUNDAMENTALSSTRINGSFORMATS */