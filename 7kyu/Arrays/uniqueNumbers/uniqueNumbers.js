function uniqueNumbers(numbersArray) {
    let resArr = [];
    numbersArray.forEach((item) => {
        if (!resArr.includes(item)) {
            resArr.push(item);
        }
    });
    console.log(resArr);
}
// uniqueNumbers([1,1,2,2]);
uniqueNumbers([1,2,3,1]);