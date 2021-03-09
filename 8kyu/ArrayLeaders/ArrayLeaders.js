var arrayLeaders = numbers => {
    var tmp=[],sum,res=[];
    for(var i=0;i<numbers.length;i++) {
        tmp=numbers.slice(i+1);
        sum=0;
        for(var j=0;j<tmp.length;j++) {
            sum+=tmp[j];
    }
    if (numbers[i]>sum) {
        res.push(numbers[i]);
    }
  }
//   return res; // some leaders
  console.log(res);
}
arrayLeaders([-1,-29,-26,-2]);


/* Definition
An element is leader if it is greater than The Sum all the elements to its right side.

Task
Given an array/list [] of integers , Find all the LEADERS in the array.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives , negatives and zeros

Repetition of numbers in the array/list could occur.

Returned Array/list should store the leading numbers in the same order in the original array/list .

Input >> Output Examples
arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
Explanation:
4 is greater than the sum all the elements to its right side

Note : The last element 0 is equal to right sum of its elements (abstract zero). */