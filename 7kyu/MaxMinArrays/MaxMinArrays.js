function solve(array) {
    let tmpMax, tmpMin;
    for (let i = 0, j = i+1; i < array.length-1; i++, j++) {
        for (let g = i; g < array.length; g++) {  // find max element
            if (array[i] < array[g]) {
                tmpMax = array[i];
                array[i] = array[g];
                array[g] = tmpMax;
            }
        }
        for (let x = j; x < array.length; x++) {
                if (array[j] > array[x]) {
                    tmpMin = array[j];                 // find min element
                    array[j] = array[x];
                    array[x] = tmpMin;
                }
        }
        i++,j++;
    }    
    console.log(array);
};

solve([15,11,10,7,12]);


// Description:
// In this Kata, you will be given an array of unique elements, and your task is to rerrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

// For example:

// solve([15,11,10,7,12]) = [15,7,12,10,11]
// The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

// More examples in the test cases.

// Good luck!

// FUNDAMENTALSARRAYS
