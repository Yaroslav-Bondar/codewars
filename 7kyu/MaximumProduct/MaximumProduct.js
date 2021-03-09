function adjacentElementsProduct(array) {
    var tmpArray=[],j=0,max=0;
    if (array.length%2==0) {
        for (var i=2; i<=array.length; i++) {
            tmpArray.push(array.slice(j,i).reduce((prev,item,index)=>{
                return prev*item;
            }));
            j++;
        }
    } else {
        for (var i=1; i<array.length; i++) {
            tmpArray.push(array.slice(j,i+1).reduce((prev,item,index)=>{
                return prev*item;
            }));
        j++;
    }
    }
    max = tmpArray.reduce((prev, item) => {
        if (prev < item) {
            return item;
        }
        else {
            return prev;
        }
    }, tmpArray[0]);
    console.log(max);
  }
  adjacentElementsProduct([1, 5, 10, 9]);

  /* Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .

Input >> Output Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6
Explanation:
The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array. */