let hash = {name: "Jeremy", age: 24, role: "Software Engineer"};

const convertHashToArray = hash => {
    let resArray=[], i=0;
    for (key in hash) {
        resArray.push([key]);
        resArray[i].push(hash[key]);
        i++;
    }
    console.log(resArray.sort());  
}
convertHashToArray(hash);