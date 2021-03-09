const mergeArrays=(a, b) => {
    // your code here
    var tmpArray=[],resArray=[],len=0;
    if(a.length>b.length){
        len=a.length;
    }else{
        len=b.length;
    }
    for(var i=0;i<len;i++) {
            tmpArray.push(a[i]);
            tmpArray.push(b[i]);
  }
  for(var j=0;j<tmpArray.length;j++) {
      if(tmpArray[j]!==undefined) {
          resArray.push(tmpArray[j]);
      }
  }
  console.log(resArray);
}
mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']);

/* Write a function that combines two arrays by alternatingly taking elements from each array in turn.

Examples:

[a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

[1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
Points:

The arrays may be of different lengths, with at least one character/digit.
One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).
Inspired by https://adriann.github.io/programming_problems.html

FUNDAMENTALS ARRAYS */