function findMissing(arr1, arr2) {
    let res;
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            res = arr1[i];
            break;
        }
    }
    console.log(arr1, arr2);
    console.log(res);
}
// findMissing([1, 2, 3], [1, 3]);
// findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]);
findMissing([7], []);

/* Description:
Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
The first array will always have at least one element.

ALGORITHMSNUMBERSARRAYSINTERVIEW QUESTIONS */
  