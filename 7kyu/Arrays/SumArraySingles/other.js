var time = performance.now();

function repeats(array) {
    let sum = 0, tmp;
    array.sort((a, b) => { return a - b; });
    // return arr.reduce((prev,current,index,arr) => {
    //     if (0 === binarySearch(arr, current, index + 1, arr.length-1) && current != arr[index - 1]) {
    //         prev += current;
    //     }
    //     return prev;
    // },0);
    for (let i = 0; i < array.length; i++) {
        tmp = 0;
        for (let j = i+1; j < array.length; j++) {
            if ( array[i] === array[j]) {
                tmp++;
            }           
        }
        if (tmp === 0 && array[i] != array[i-1]) {
            sum += array[i];
        }         
    }
    console.log(sum);
};
// repeats([16, 0, 11, 4, 8, 16, 0, 11]);
repeats([5, 17, 18, 11, 13, 18, 11, 13]);

time = performance.now() - time;
console.log('Время выполнения = ', time);


