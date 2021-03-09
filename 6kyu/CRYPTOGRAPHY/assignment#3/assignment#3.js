function keywordCipher(str, key) {
    var keyword = [], alphabet = [];
    keyword = key.split('').reduce((keyw, it) => {  // remove duplicate letters
        if (!keyw.includes(it))
            keyw.push(it);
        return keyw;
    },[]);
    for (let i = 97; i <= 122; i++) {               // get the alphabet
        alphabet.push(String.fromCharCode(i));
    }
    keyword = keyword.concat(alphabet.filter(a => !keyword.includes(a))); // create an encryption key
    console.log(str.split('').reduce((enc, val) => {                   // coding
        if (val === ' ') {
            enc += val;
        }
        else {
            enc += keyword[alphabet.indexOf(val.toLowerCase())];    
        }
        return enc;
    },''));
}
keywordCipher("Welcome home","secret");
/* Third day at your new cryptoanalyst job and you come across your toughest assignment yet. Your job is to implement a simple keyword cipher. A keyword cipher is a type of monoalphabetic substitution where two parameters are provided as such (string, keyword). The string is encrypted by taking the keyword, dropping any letters that appear more than once. The rest of the letters of the alphabet that aren't used are then appended to the end of the keyword.

For example, if your string was "hello" and your keyword was "wednesday", your encryption key would be 'wednsaybcfghijklmopqrtuvxz'.

To encrypt 'hello' you'd substitute as follows,

              abcdefghijklmnopqrstuvwxyz
  hello ==>   |||||||||||||||||||||||||| ==> bshhk
              wednsaybcfghijklmopqrtuvxz
hello encrypts into bshhk with the keyword wednesday. This cipher also uses lower case letters only.

Good Luck.

ALGORITHMSCRYPTOGRAPHYSECURITYSTRINGS */