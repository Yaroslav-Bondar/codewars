function findTheKey(m, c) {
    let letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], dropMes, res;
    dropMes = m.split('').map(it => letter.indexOf(it) + 1);
    res = c.reduce((key, val, i) => {
        key.push(val - dropMes[i]);
        return key;
    },[]);
    // console.log(dropKey);
    // console.log(Number(c.reduce((key, val, i) => {key.push(val - dropMes[i]); return key;},[]).slice(0, c.indexOf(c[0], 1)).join('')));
    console.log(Number(res.slice(0, res.indexOf(res[0], 1)).join('')));
}
// findTheKey("scout", [ 20, 12, 18, 30, 21]);
// findTheKey("masterpiece", [ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]);
findTheKey("nomoretears", [15, 17, 14, 17, 19, 7, 21, 7, 2, 20, 20]);
