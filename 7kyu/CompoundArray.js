function compoundArray(a, b) {
    let j=0;
    for (let i = 0; i < b.length; i++) {
        a.splice(j += 1, 0, b[i]);
        console.log(j);
        j++;
    }
    // b.reduce((prev, current, index) => {
    //     index++;
    //     return a.splice(index, 0, current);
        
    // });
    console.log(a);
}
compoundArray([11, 12], [21, 22, 23, 24]);
// compoundArray([2147483647,2147483646,2147483645,2147483644,2147483643], [9]);
// compoundArray([214,215,216,217,218], []);


/* Description:
You have to create a method "compoundArray" which should take as input two int arrays of different length and return one int array with numbers of both arrays shuffled one by one.

Input - {1,2,3,4,5,6} and {9,8,7,6} 
Output - {1,9,2,8,3,7,4,6,5,6}
FUNDAMENTALSARRAYS */