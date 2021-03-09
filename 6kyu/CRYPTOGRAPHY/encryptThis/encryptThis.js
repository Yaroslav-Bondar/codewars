var encryptThis = function(text) {
    let arr;
    arr = text.split(' ').map(item => item.split(""));
    console.log(arr.reduce((res, val) => {
            res += val.reduce((prev, item, i) => {
                if (i == 0) {
                    prev += val[0].charCodeAt(val[0]);  
                } 
                if (val.length >= 3) {
                    if (i == 1) {
                        prev += val[val.length - 1];
                    }
                    else if (i == val.length - 1){
                        prev += val[1];
                    }
                    else if (i != 0) {
                        prev += item;
                    }
                }
                else {
                    if (i != 0) {
                        prev += item;
                    }
                }
                return prev;
            },'') + ' ';            
        return res;
        },'').trim());
  };
  encryptThis("A wise old owl lived in an oak");
//   encryptThis("A");

  /* Description:
Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter needs to be converted to its ASCII code.
The second letter needs to be switched with the last letter
Keepin' it simple: There are no special characters in input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
FUNDAMENTALSSTRINGSREGULAR EXPRESSIONSDECLARATIVE PROGRAMMINGADVANCED LANGUAGE FEATURESARRAYSCIPHERSALGORITHMSCRYPTOGRAPHYSECURITY */