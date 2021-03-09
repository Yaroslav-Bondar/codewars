function oddOrEven(array) {
	if (array.length === 0 ) {
		return "even";
	} else if ((array.reduce((accum,item)=> { return accum + item; },0) % 2) === 0) {
		return "even";
	} else {
		return "odd";
	}
}
oddOrEven([1, 1, 4]);
// oddOrEven([0]);

/* Description:
Task:
Given a list of numbers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Example:
odd_or_even([0])          ==  "even"
odd_or_even([0, 1, 4])    ==  "odd"
odd_or_even([0, -1, -5])  ==  "even"
Have fun!

FUNDAMENTALSARITHMETICMATHEMATICSALGORITHMSNUMBERSARRAYS */