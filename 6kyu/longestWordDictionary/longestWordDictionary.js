function findLongestWord(str, arr){
    let resArr = [], tmp;
    resArr = arr.map(item => item.split(''));
    tmp = resArr.reduce((prev, val, i) => {
        if (val.every(item => str.includes(item)))
            prev.push(val);  
        return prev;   
    },[]);
    tmp = tmp.map(item => item.join(''));
    console.log(tmp);
    tmp.sort((a, b) => {
        if (a.length > b.length) 
            return -1;
        if (a.length < b.length) 
          return 1;
        if (a.length == b.length)
            if (a > b) 
                return -1;
            if (a < b)
                return 1     
    });

    // console.log(resArr);
    console.log(tmp[0]);
}
findLongestWord("abpcplea", ["ale","apple","monkey","plea"]);