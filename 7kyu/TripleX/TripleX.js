const tripleX = str=> {
    var patt=/x{1,2}[^x]{1,}/;
    var res;
    if((res=str.search(/[x]{1}[^x]{2}/))==-1) {
        console.log("false");
        console.log("false");
        return false;
    }
    else if(str.search(/x{3}/)!==-1) {
        console.log("true");
        return true;
    } 
}
tripleX("xxabxxraxxxas");
