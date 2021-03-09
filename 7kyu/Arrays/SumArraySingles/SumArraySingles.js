// var foundElement;
function repeats(arr) {
    arr.sort((a, b) => { return a - b; });
    return arr.reduce((prev,current,index,arr) => {
        if (0 === binarySearch(arr, current, index + 1, arr.length-1) && current != arr[index - 1]) {
            prev += current;
        }
        return prev;
    },0);
};
// repeats([4,5,7,5,4,8]);
// repeats([9, 10, 19, 13, 19, 13]);
repeats([16, 0, 11, 4, 8, 16, 0, 11]);
function binarySearch(arr, key, low, high) {  // binary search
    let found = 0, mid;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (arr[mid] < key) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
        if (arr[mid] == key) {
            found = 1;
            break;
        }
    }
    return found;
}

/* Description:
In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

More examples in the test cases.

Good luck!

If you like this Kata, please try:

Sum of prime-indexed elements

Sum of integer combinations

ALGORITHMS */