function arrayMadness(a,b) {
  // Ready, get set, GO!!!
  let sumA=0;
  let sumB=0;
  let i=0;
  for(i of a) {
  	sumA+=i**2;
  }
  for(i of b) {
  	sumB+=i**3;
  }
  if(sumA>sumB) {
  	console.log(true);
  }
  else {
  	console.log(false);	
  }
  console.log(sumA);
  console.log(sumB);
}
arrayMadness([4,5,6],[3,4,5]);


/* SpeedCode #2 - Array Madness
Objective
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

E.g.

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
Get your timer out. Are you ready? Ready, get set, GO!!!

PUZZLES ARRAYS */ 