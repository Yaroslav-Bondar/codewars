function evenChars(string) {
   let resArr=[];
    if (string.length < 2 || string.length > 100) {
        return "invalid string";
    }
    for (let i = 0; i < string.length; i++) {
        if (i % 2 !== 0) {
            resArr.push(string[i]);
        }        
    }
    console.log(resArr);
}
evenChars ("abcdefghijklm");