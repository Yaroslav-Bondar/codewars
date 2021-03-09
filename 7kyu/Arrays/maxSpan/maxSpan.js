const maxSpan = (array) => {
    let resArr = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = array.length-1; j > i; j--) {
            if (array[i] === array[j]) {
                resArr.push( (j - i) + 1 );
                break;     
            }
        }    
    }
    console.log(Math.max(...resArr));
}
maxSpan([1, 4, 6, 1, 4, 4, 4, 8 ,6]);

/* Description:
Consider the leftmost and righmost appearances of the same value in an array. We'll say that the "span" is the number of elements between the the same elements (two inclusive). Return the largest span found in the given array.

[1, 2, 1, 1, 3, 4, 5, 6, 7, 8, 8] → 4  // span is (1, 2, 1, 1)  
[1, 4, 2, 1, 4, 1, 4, 9, 7, 7, 7] → 6  // span is (4, 2, 1, 4, 1, 4)
[1, 4, 6, 1, 4, 4, 4, 8 ,6, 2, 3] → 7  // span is (6, 1, 4, 4, 4, 8, 6)
P.S. Input array includes positive integers, array's length > 10.

ALGORITHMSARRAYSNUMBERSBASIC LANGUAGE FEATURESFUNDAMENTALS */