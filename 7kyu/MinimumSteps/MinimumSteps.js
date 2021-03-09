function minimumSteps(numbers, value) {
    //your code here
    var tmp=0,count=0;
    numbers.sort(function(a, b){return a-b});
    if (numbers[0]==value || numbers[0]>value) {
        console.log(numbers[0]);
        return count;
    } 
    else {
        tmp=numbers[0];
    for (var i=1;i<=numbers.length;i++) {
        tmp+=numbers[i];
        count+=1;
        if (tmp > value || tmp == value) {
            console.log(count);
            return count;
        }
    }
    }
  }
  minimumSteps([23, 74, 5, 88, 55, 3, 3],9);

  /* Task
Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

Notes:
List size is at least 3.

All numbers will be positive.

Numbers could occur more than once , (Duplications may exist).

Threshold K will always be reachable.

Input >> Output Examples
minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)
Explanation:
We add two smallest elements (1 + 2), their sum is 3 .

Then we add the next smallest number to it (3 + 3) , so the sum becomes 6 .

Now the result is greater or equal to 6 , Hence the output is (2) i.e (2) operations are required to do this . */