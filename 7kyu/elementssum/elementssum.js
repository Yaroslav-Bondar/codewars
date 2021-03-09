const elementsSum = (arr,d) => {
return arr.reduce( (prev,item,index) => {
        // console.log(arr.length);
        // if (arr[index][(arr.length-1)-index] !== undefined) {
        //     return prev+arr[index][(arr.length-1)-index];           // classic variant
        // } else if (d !== undefined) {
        //     return prev+d; 
        // } else {
        //     return prev+0; 
        // }

        return arr[index][(arr.length-1)-index] !== undefined ? prev+arr[index][(arr.length-1)-index] : d ? prev+d : prev+0; 
    },0);
  }
elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], [9, 8, 7, 4]]);  

/* Given an array (or list or vector) of arrays (or, guess what, lists or vectors) of integers, your goal is to return the sum of a specific set of numbers, starting with elements whose position is equal to the main array length and going down by one at each step.

Say for example the parent array (etc, etc) has 3 sub-arrays inside: you should consider the third element of the first sub-array, the second of the second array and the first element in the third one: [[3, 2, 1, 0], [4, 6, 5, 3, 2], [9, 8, 7, 4]] would have you considering 1 for [3, 2, 1, 0], 6 for [4, 6, 5, 3, 2] and 9 for [9, 8, 7, 4], which sums up to 16.

One small note is that not always each sub-array will have enough elements, in which case you should then use a default value (if provided) or 0 (if not provided), as shown in the test cases.

ALGORITHMSARRAYSLISTSDATA STRUCTURESDYNAMIC ARRAYSFUNCTIONAL PROGRAMMINGDECLARATIVE PROGRAMMINGVECTORSARITHMETICMATHEMATICSNUMBERSINTEGERSMAP/REDUCEMAPS */