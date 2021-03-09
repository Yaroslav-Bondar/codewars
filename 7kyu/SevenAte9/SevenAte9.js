sevenAte9=str=>{
var resStr=[],tmp,res=[];
    for(var i=0;i<str.length;i++){
        tmp=str.slice(i,i+3);
        if(tmp=='797') {
            resStr.push(i+1);  
        }
    }
    res=str.split('');
    for(var i=0;i<resStr.length;i++){
        delete res[resStr[i]];
    }
console.log(res.join(''));
}
sevenAte9('165561786121789797');

/* Write a function that removes every lone 9 that is inbetween 7s.

sevenAte9('79712312') => '7712312'
sevenAte9('79797') => '777'
Input: String Output: String

FUNDAMENTALSSTRINGS */