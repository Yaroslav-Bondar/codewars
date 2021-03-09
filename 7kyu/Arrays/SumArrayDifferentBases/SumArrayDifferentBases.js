function sumItUp(array) {
    let sum = array.reduce((prev, current) => {
        return prev += parseInt(current[0], current[1]);
    },0);
    console.log(sum);
}
// sumItUp([["101",2], ["10",8]]);
sumItUp([["ABC",16], ["11",2]]);
// sumItUp([["101",16],["7640",8],["1",9]]);

/* Description:
You get an array of different numbers to sum up. But there is one problem, those numbers all have different bases. For example:

You get an array of numbers with their base as an input:

[["101",16],["7640",8],["1",9]]
The output should be the sum as an integer value with a base of 10, so according to the example this would be:

4258

A few more examples:
[["101",2], ["10",8]] --> 13
[["ABC",16], ["11",2]] --> 2751
Bases can be between 2 and 36 (2<=base<=36)

FUNDAMENTALSBINARYNUMBERSARRAYSLISTSDATA STRUCTURESARITHMETICMATHEMATICSALGORITHMS */