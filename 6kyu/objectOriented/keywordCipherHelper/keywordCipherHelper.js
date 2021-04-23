let abc = "abcdefghijklmnopqrstuvwxyz";
var key = "keyword";
function KeywordCipher(abc, keyword) {
    this.abc = abc.split('')
    this.keyword = keyword.split('')
    this.abcCode = this.keyword.concat(this.abc.filter(item => !this.keyword.includes(item)))
    this.encode = function (str) {
      let encode = ''
      for (let i = 0; i < str.length; i++) {
        encode += this.abc.indexOf(str[i]) >= 0 ? this.abcCode[this.abc.indexOf(str[i])] : str[i]   
      }
      console.log(encode)
      return encode
    }
    this.decode = function (str) {
      let decode = ''
      for (let i = 0; i < str.length; i++) {
        decode += this.abcCode.indexOf(str[i]) >= 0 ? this.abc[this.abcCode.indexOf(str[i])] : str[i]
      }
      console.log(decode)
      return decode
    }
}
let cipher = new KeywordCipher(abc, key)
// console.log(cipher.abc)
// console.log(cipher.abcCode)
// cipher.encode
cipher.encode("xyz")
cipher.decode("key")
/* https://www.codewars.com/kata/535c1c80cdbf5011e600030f/discuss
Description:
A keyword cipher is a monoalphabetic cipher which uses a "keyword" to provide encryption. It is somewhat similar to a Caesar cipher.

In a keyword cipher, repeats of letters in the keyword are removed and the alphabet is reordered such that the letters in the keyword appear first, followed by the rest of the letters in the alphabet in their otherwise usual order.

E.g. for an uppercase latin alphabet with keyword of "KEYWORD":

A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z

becomes:

K|E|Y|W|O|R|D|A|B|C|F|G|H|I|J|L|M|N|P|Q|S|T|U|V|X|Z

such that:

cipher.encode('ABCHIJ') == 'KEYABC'
cipher.decode('KEYABC') == 'ABCHIJ'
All letters in the keyword will also be in the alphabet. For the purpose of this kata, only the first occurence of a letter in a keyword should be used. Any characters not provided in the alphabet should be left in situ when encoding or decoding.

REFACTORINGCIPHERSALGORITHMSCRYPTOGRAPHYSECURITYOBJECTSCLASSESBASIC LANGUAGE FEATURESOBJECT-ORIENTED PROGRAMMINGFUNDAMENTALSSTRINGS
*/