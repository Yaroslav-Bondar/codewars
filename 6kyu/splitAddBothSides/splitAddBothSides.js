function splitAndAdd(arr, n) {
    let index, left, right;
    function sumArray(a = [], b = []) {           // get the sum of the arrays
        let max, min, indexMin;
        if (a.length > b.length) {
            max = a;
            min = b;
        }
        else if (a.length == b.length) {
            max = a;
            min = b;
        }
        else {
            max = b;
            min = a;
        }
        indexMin = min.length - 1;
        return max.reduceRight((sum, val, i) => {
            if (min[indexMin] != undefined) {
                sum.unshift(val + min[indexMin]);
            }
            else {
                sum.unshift(val);
            }
            indexMin--;
            return sum;
        }, []);
    }
    if (arr.length == 1) {
        console.log(arr);
        return arr;
    }
    else {
        for (let i = 0; i < n; i++) {
            index = Math.floor(arr.length / 2);
            left = arr.slice(0, index);
            right = arr.slice(index, arr.length);
            arr = sumArray(left, right);
            if (arr.length == 1)
                break;
        }
    }
    console.log(arr);
}
// splitAndAdd([1,2,3,4,5], 2);
// splitAndAdd([1,2,3,4,5], 3);
splitAndAdd([32,45,43,23,54,23,54,34], 2);
// splitAndAdd([15], 2);
/* 
https://www.codewars.com/kata/5946a0a64a2c5b596500019a/train/javascript
Description:
Inspired by the Fold an Array kata. This one is sort of similar but a little different.

Task
You will receive an array as parameter that contains 1 or more integers and a number n.

Here is a little visualization of the process:

Step 1: Split the array in two:

[1, 2, 5, 7, 2, 3, 5, 7, 8]
      /            \
[1, 2, 5, 7]    [2, 3, 5, 7, 8]
Step 2: Put the arrays on top of each other:

   [1, 2, 5, 7]
[2, 3, 5, 7, 8]
Step 3: Add them together:

[2, 4, 7, 12, 15]
Repeat the above steps n times or until there is only one number left, and then return the array.

Example
Input: arr=[4, 2, 5, 3, 2, 5, 7], n=2


Round 1
-------
step 1: [4, 2, 5]  [3, 2, 5, 7]

step 2:    [4, 2, 5]
        [3, 2, 5, 7]

step 3: [3, 6, 7, 12]


Round 2
-------
step 1: [3, 6]  [7, 12]

step 2:  [3,  6]
         [7, 12]

step 3: [10, 18]


Result: [10, 18]
ALGORITHMSARRAYS */    