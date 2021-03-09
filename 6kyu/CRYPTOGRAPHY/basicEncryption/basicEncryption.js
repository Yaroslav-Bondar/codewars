function encrypt(text, rule) {
    let arr, arr2;
    arr = text.split('');
    arr2 = arr.reduce((enc, val, i) => {
        if (val == '"') {
            enc += '"';
        } 
        else {
            enc += String.fromCharCode(val.charCodeAt(0) + 2); 
        }
        return enc;
    },'');
    console.log(arr);
    console.log(arr2);
};
encrypt("please encrypt me", 2);