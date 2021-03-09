function switchLights(a) {
    var count=0;
    for (var i=0;i<a.length;i++) {
        count++;
        if(a[i]==1) {
            a[i]=0;
            for (var j=0;j<(count-1);j++) {
                if(a[j]==1) {
                    a[j]=0;
                }else{
                    a[j]=1;
                }
            }
        }
    } 
    console.log(a);   
  }
  switchLights([1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1]);

  /* Task
N candles are placed in a row, some of them are initially lit. For each candle from the 1st to the Nth the following algorithm is applied: if the observed candle is lit then states of this candle and all candles before it are changed to the opposite. Which candles will remain lit after applying the algorithm to all candles in the order they are placed in the line?

Example
For a = [1, 1, 1, 1, 1], the output should be [0, 1, 0, 1, 0].

Check out the image below for better understanding: For a = [0, 0], the output should be [0, 0].

The candles are not initially lit, so their states are not altered by the algorithm.

Input/Output
[input] integer array a

Initial situation - array of zeros and ones of length N, 1 means that the corresponding candle is lit.

Constraints: 2 ≤ a.length ≤ 5000.

[output] an integer array

Situation after applying the algorithm - array in the same format as input with the same length.

PUZZLESGAMES */