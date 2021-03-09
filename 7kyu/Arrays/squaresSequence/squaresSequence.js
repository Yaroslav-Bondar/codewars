function squares(x, n) {
    let resArr = [];
    if (n > 0) {
      resArr.push(x);
      for (let i = 0; i < n-1; i++) {
        resArr.push(Math.pow(resArr[i], 2));
      }  
    }  
    return resArr;
}
squares(2,5);
// [2,4,16,256,65536]


/* Description:
Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

Examples
2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]
FUNDAMENTALSMATHEMATICSALGORITHMSNUMBERS */