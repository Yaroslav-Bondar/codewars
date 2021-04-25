var CaesarCipher = function (shift) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z']
    this.encode = function (str) {
        let indexEnc
        let encode = ''
        for (let i = 0; i < str.length; i++) {
            indexEnc = alphabet.indexOf(str[i].toLowerCase())
            if(indexEnc == -1) {
                encode += str[i] 
            }
            else {
                if (indexEnc + shift <= alphabet.length - 1) {
                    encode += alphabet[indexEnc + shift].toUpperCase()
                }
                else {
                    encode += alphabet[shift - ((alphabet.length - 1) - indexEnc) - 1].toUpperCase()
                }
            }
        }
        console.log(encode)
        return encode    
    };
    this.decode = function (str) {
        let indexEnc
        let decode = ''
        for (let i = 0; i < str.length; i++) {
            indexEnc = alphabet.indexOf(str[i].toLowerCase())
            if(indexEnc == -1) {
                decode += str[i] 
            }
            else {
                if (indexEnc - shift >= 0) {
                    decode += alphabet[indexEnc - shift].toUpperCase()
                }
                else {
                    decode += alphabet[(alphabet.length - 1) - (shift - indexEnc) + 1].toUpperCase()
                }
            }
        }
        console.log(decode)
        return decode    
    }
}
// if ('c'.toLowerCase() == 'C'.toLowerCase()) {
//     console.log(true)
// }
// if (1) {
//     console.log(true)
// }
var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
// c.encode('w'); 
c.encode('4odewars'); // returns 'HTIJBFWX'
c.decode('4FKKQJX'); // returns 'WAFFLES'
/* https://www.codewars.com/kata/526d42b6526963598d0004db/train/javascript
Write a class that, when given a string, will return an uppercase string with each letter shifted forward in the alphabet by however many spots the cipher was initialized to.

For example:

var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
c.encode('Codewars'); // returns 'HTIJBFWX'
c.decode('BFKKQJX'); // returns 'WAFFLES'
If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.
The shift will always be in range of [1, 26].

ALGORITHMSCIPHERSCRYPTOGRAPHYSECURITYOBJECTSCLASSESBASIC LANGUAGE FEATURESOBJECT-ORIENTED PROGRAMMINGFUNDAMENTALSSTRINGS 
 */