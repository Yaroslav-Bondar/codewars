function maxProduct(numbers, size){
  //your code here
  var sum=1;
  numbers.sort(function(a,b){return a-b});
  for(var i=1;i<=size;i++) {
    sum*=numbers[numbers.length-i];
  }
  console.log(sum);
}
maxProduct([8,6,4,6], 3);

/* Task
Given an array/list [] of integers , Find the product of the k maximal numbers.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives , negatives and zeros

Repetition of numbers in the array/list could occur.

Input >> Output Examples
maxProduct ({4, 3, 5}, 2) ==>  return (20)
Explanation:
Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 . */