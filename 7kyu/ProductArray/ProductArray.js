function productArray(numbers){
    //your code here
    var sum=1,res=[];
    for(var i=0;i<numbers.length;i++) {
        sum=1;
        for(var j=0;j<numbers.length;j++) {
            if(i!==j){
                sum*=numbers[j];
            }
        }
        res.push(sum);
    }
    console.log(res);
}
productArray([3,27,4,2]);

/* Task
Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

Notes
Array/list size is at least 2 .

Array/list's numbers Will be only Positives

Repetition of numbers in the array/list could occur.

Input >> Output Examples
productArray ({12,20}) ==>  return {20,12}
Explanation:
The first element in prod [] array 12 is the product of all array's elements except the first element

The second element 20 is the product of all array's elements except the second element .

 */