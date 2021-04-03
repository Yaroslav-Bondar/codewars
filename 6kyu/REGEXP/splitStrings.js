function solution(str){
    let res;
    res = str.match(/(\w){2}/g) || [];
    if (str.length % 2 != 0)
        res.push(str[str.length - 1] + '_');
    console.log(res);
}
// solution("abcdef");
solution("");
//  ["ab", "cd", "ef", "g_"]);
/* https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
Description:
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
ALGORITHMSREGULAR EXPRESSIONSDECLARATIVE PROGRAMMINGADVANCED LANGUAGE FEATURESFUNDAMENTALSSTRINGS */