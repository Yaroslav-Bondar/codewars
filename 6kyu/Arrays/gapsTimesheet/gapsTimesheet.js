let testArr = [null,1,null];
testArr = [1,null,2];
testArr = [1,null,2,null,2,null,1];
testArr = [1,null,null,null,null,1];
testArr = [null];
function fill_gaps(ts) {
    let prev = 0, next = 0, g, res;
    res = ts.reduce((arr, value, i, array) => {
        if (value != null) {
            arr.push(value);
        } 
        else if (next <= i) {                 // находим диапазон с null
            prev = i - 1;
            g = i;
            while (array[g] === null) {
                g++;
                if (array[g] !== null)
                    next = g;
            };
            if (array[prev] === array[next] && array[prev] != undefined && array[next] != undefined) {   // замена null на нужное значение
                for (let i = prev + 1; i < next; i++) {
                    arr.push(array[prev]);
                }
            } else {
                for (let i = prev + 1; i < next; i++) {
                    arr.push(null);
                }    
            }
        }
        return arr;
    },[]);
    console.log(res);
}
fill_gaps(testArr);

/* Description:
Background:
At work I need to keep a timesheet, by noting which project I was working on every 15 minutes. I have an timer that beeps every 15 minutes to prompt me to note down what I was working on at that point, but sometimes when I'm away from my desk or working continuously on one project, I don't note anything down and these get recorded as null.

Task:
Help me populate my timesheet by replacing any null values in the array with the correct project name which is given by surrounding matching values.

Examples:
fill_gaps([1,null,1]) -> [1,1,1]   # Replace nulll values surrounded by matching values
fill_gaps([1,null,null,null,1]) -> [1,1,1,1,1]  # There may be multiple nulls
fill_gaps([1,null,1,2,null,2]) -> [1,1,1,2,2,2]  # There may be multiple replacements required
fill_gaps([1,null,2,null,2,null,1]) -> [1,null,2,2,2,null,1]  # No nesting.
fill_gaps([1,null,2]) -> [1,null,2] # No replacement if ends don't match
fill_gaps([null,1,null]) -> [null,1,null] # No replacement if ends don't match off the ends of the array
fill_gaps(['codewars', null, null, 'codewars', 'real work', null, null, 'real work']) -> ["codewars", "codewars", "codewars", "codewars", "real work", "real work", "real work", "real work"] # Works with strings too
Input:
An array of values some of which will be null

Output:
An array with any consecutive null elements surrounded by equal values replaced by that value.

Note:
null is language specific, for Ruby it will be nil, for Python None

Input will always be a valid array.
The original array should not be modified.
The output array might still contain null values. The values in the array can be of different data types, but as long as they are == they can be considered the same. In Haskell Maybe Int is used, hence numbers only and Nothing as an empty value

Sometimes I forget to note when I stopped working on a project and started on a new one. In this case there will still be nulls in the resulting array. In this case I'll need to manually resolve the problem by checking my git logs or message timestamps for clues as to when I changed task. But that's not something you need to worry about in this kata.

ALGORITHMSARRAYS */
