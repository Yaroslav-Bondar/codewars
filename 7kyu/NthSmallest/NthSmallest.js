function nthSmallest(arr, pos){
    //your code here
    arr.sort(function(a,b){return a-b});
    console.log(arr[pos-1]);
  }
  nthSmallest([-5,-1,-6,-18],4);
  /* Task
Given an array/list [] of integers , Find the Nth smallest element in this array of integers

Notes
Array/list size is at least 3 .

Array/list's numbers could be a mixture of positives , negatives and zeros .

Repetition in array/list's numbers could occur , so don't Remove Duplications .

Input >> Output Examples
nthSmallest({3,1,2} ,2) ==> return (2) 
Explanation:
Since the passed number is 2 , Then * the second smallest element in this array/list is 2*

 */