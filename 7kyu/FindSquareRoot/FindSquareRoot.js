function squareRoot(s) {
    let x = 1.0;
    while (Math.abs(x * x - s) > 0.00001) {   // решение методом Ньютона
        x = (x * x + s) / 2. / x ;  
    }
    console.log(Number(x.toFixed(5)));
}
// squareRoot(81);
// squareRoot(15);
// squareRoot(81);
squareRoot(21);
// 9
/* Description:
Create a Function that takes one parameter and returns its square root rounded to 5 decimal places. You are not allowed to use the Math.sqrt() or the Math.pow() methods.

Trailing zeros should be left out. For example

squareRoot(39) // => 6.245;
rather than

squareRoot(39) // => 6.24500;
ALGORITHMS */
