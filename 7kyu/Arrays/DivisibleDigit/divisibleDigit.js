function divisibleByLast(n) {
    let arrRes = [], strNum = n.toString();
    arrRes.push(false);
    for (let i = 1; i < strNum.length; i++) {
        if (Number(strNum[i]) % Number(strNum[i-1]) !== 0) {
            arrRes.push(false);
        } else {
            arrRes.push(true);
        }
    }
    console.log(arrRes);
}
divisibleByLast(73312);

/* Description:
Take a number and check each digit if it is divisible by the digit on its left checked and return an array of booleans.

The booleans should always start with false becase there is no digit before the first one.

Examples
73312        => [false, false, true, false, true]
2026         => [false, true, false, true]
635          => [false, false, false]
* Remember 0 is evenly divisible by all integers but not the other way around *

ALGORITHMSSEQUENCESARRAYSNUMBERS */