const input = {
    ' ': [5],
    d: [10],
    e: [1],
    H: [0],
    l: [2,3,9],
    o: [4,7],
    r: [8],
    w: [6],
}
input2 = {
 d: [1],
 f: [2],
 r: [3],
 q: [0]   
};
const buildString = (obj) => {
    let len=0,str='';
    for (let key in obj) {
        len+=obj[key].length;
    }
    if (len==0) {
        console.log(str);
    } else {
    for (let i=0; i<len; i++) {
        for (let key in obj) {
            for (let j=0; j<obj[key].length; j++){
                if (obj[key][j]==i) {
                str+=key;
            }
        }
        }
    }
    console.log(str);
    }
}
buildString(input);