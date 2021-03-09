const digits = num => {
    let resArr = [], numStr = num.toString();
    for (let i = 0; i < numStr.length; i++) {
        for (let j = i+1; j < numStr.length; j++) {
            resArr.push(Number(numStr[i])+Number(numStr[j]));
        }
    }
    console.log(resArr);
}
digits(156);
//  [ 6, 7, 11 ]
digits(81596);
// [ 9, 13, 17, 14, 6, 10, 7, 14, 11, 15 ]

/* Description:
Given a long number, return all the possible sum of two digits of it.

For example, 12345: all possible sum of two digits from that number are:

[ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]
Therefore the result must be:

[ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]
ALGORITHMSNUMBERS */