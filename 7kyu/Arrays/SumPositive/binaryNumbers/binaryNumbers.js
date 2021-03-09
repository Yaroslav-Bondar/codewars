function positiveToN(b) {
  let tmp = 0, arrSum=[];
  b.forEach((item,i) => {   // getting inverse start array
    if (item == 0) {
      b[i] = 1;
    } else {
      b[i] = 0;
    }
  })
  console.log ("b inverse", b);
  for (let i = 0; i < b.length; i++) {     // geting 1 in binary system
    if (i != b.length-1) {
      arrSum[i] = 0;
    } else {
      arrSum[i] = 1;
    }
  }
  console.log ('arrSum', arrSum);
  for (let i = b.length-1; i >= 0; i--) {                // getting the sum of the inverse of the initial array and 1 in binary
    if ((b[i] === 0 && arrSum[i] === 0) && tmp === 0) {   // where tmp === 0
      b[i] = 0;
      continue; 
    }
    if (((b[i] === 1 && arrSum[i] === 0) || (b[i] === 0 && arrSum[i] === 1)) && tmp === 0) {
      b[i] = 1;
      continue; 
    }
    if ((b[i] === 1 && arrSum[i] === 1) && tmp === 0) {
      b[i] = 0;
      tmp = 1;
      continue; 
    }
    if ((b[i] === 0 && arrSum[i] === 0) && tmp === 1) {  // where tmp === 1
      b[i] = 1;
      tmp = 0;
      continue; 
    }
    if (((b[i] === 1 && arrSum[i] === 0) || (b[i] === 0 && arrSum[i] === 1)) && tmp === 1) {
      b[i] = 0;
      continue; 
    }
    if ((b[i] === 1 && arrSum[i] === 1) && tmp === 1) {
      b[i] = 0;
      tmp = 1; 
      continue; 
    }
  }
  console.log("b = ", b);
}
// positiveToN([0, 0, 0, 0]);
// positiveToN([0, 0, 1, 0]);
positiveToN([1, 0, 1, 0]);
// positiveToN([0, 0, 1, 1]);
// positiveToN([0, 1, 0, 0])
// positiveToN([1,1,0,0,0]);

/* Given an array of one's and zero's that represents a positive binary number convert the number to two's complement value.

Two's complement is the way most computers represent positive or negative integers. The most significant bit is negative.

Examples:

-8 4 2 1

[1,1,1,1] = -1

[1,0,0,0] = -8

[1,1,0,1] = -3

To get the two's complement negative notation of an integer, you take the number in binary.

You then invert the digits, and add one to the result.

For example:

[0,0,1,0] = 2 in base 10

[1,1,0,1] <- Flip the bits

Add 1

[1,1,1,0] = -2

However, the arrays can have varying lengths, not just limited to 4.

FUNDAMENTALSBINARYARRAYS */
