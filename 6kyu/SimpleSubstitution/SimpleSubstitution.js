var abc1 = "abcdefghijklmnopqrstuvwxyz13*";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz2";

function SubstitutionCipher(abc1, abc2) {
    this.encode = function (str) {
        let resEncodeStr = '',resEncodeObj={};
        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < abc1.length; j++) {
                if (str[i]==abc1[j] && abc2[j]!==undefined) {
                            resEncodeObj[i]=abc2[j];
                            break;
                } 
            };
        };
        for (let i = 0; i < str.length; i++) {
            if (!(String(i) in resEncodeObj)) {
                resEncodeObj[i]=str[i];
            }            
        }
        for (key in resEncodeObj) {
            resEncodeStr+=resEncodeObj[key];
        };
        console.log("resEncodeStr --- ",resEncodeStr);
    };    
    this.decode = function (str) {
        let resDecodeStr = '',resDecodeObj={};
        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < abc2.length; j++) {
                if (str[i]==abc2[j] && abc1[j]!==undefined) {
                            resDecodeObj[i]=abc1[j];
                            break;
                } 
            };
        }
        for (let i = 0; i < str.length; i++) {
            if (!(String(i) in resDecodeObj)) {
                resDecodeObj[i]=str[i];
            }            
        }
        for (key in resDecodeObj) {
            resDecodeStr+=resDecodeObj[key];
        };
        console.log("resDecodeStr --- ",resDecodeStr);
    };
};
var sub = new SubstitutionCipher(abc1, abc2);
sub.encode("31*");
sub.decode("t_fo&*83"); 

/* A simple substitution cipher replaces one character from an alphabet with a character from an alternate alphabet, where each character's position in an alphabet is mapped to the alternate alphabet for encoding or decoding.

E.g.

var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";

var sub = new SubstitutionCipher(abc1, abc2);
sub.encode("abc") // => "eta"
sub.encode("xyz") // => "qxz"
sub.encode("aeiou") // => "eirfg"

sub.decode("eta") // => "abc"
sub.decode("qxz") // => "xyz"
sub.decode("eirfg") // => "aeiou"
If a character provided is not in the opposing alphabet, simply leave it as be.

ALGORITHMSCIPHERSCRYPTOGRAPHYSECURITYOBJECTSCLASSESBASIC LANGUAGE FEATURESOBJECT-ORIENTED PROGRAMMINGFUNDAMENTALSSTRINGS */