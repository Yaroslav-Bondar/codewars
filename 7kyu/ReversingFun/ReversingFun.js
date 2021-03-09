flipNumber=n=>{
    var arr=n.split(""),arrTmp,count=0;
    for(var i=0;i<arr.length;i++){
        arrTmp=arr.slice(i);
        arrTmp.reverse();
        count=i;
        for(var j=0;j<arrTmp.length;j++){
            arr.splice(count,1,arrTmp[j])
            count++;
        }
    }
    console.log(arr.join(''));
}
flipNumber("0123456789");

/* You are going to be given a string. Your job is to return that string in a certain order that I will explain below:

Let's say you start with this: 012345

The first thing you do is reverse it:543210
Then you will take the string from the 1st position and reverse it again:501234
Then you will take the string from the 2nd position and reverse it again:504321
Then you will take the string from the 3rd position and reverse it again:504123

Continue this pattern until you have done every single position, and then you will return the string you have created. For this particular number, you would return:504132

#Input: A string of length 1 - 1000

#Output: A correctly reordered string.

ALGORITHMSSTRINGSFUNDAMENTALS */