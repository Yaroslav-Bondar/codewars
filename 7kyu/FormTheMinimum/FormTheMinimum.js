function minValue(values){
    //your code here
    var tmpArray=[],res,tmpStr='',n=0;
    values.sort();
    tmpArray.push(values[0]);
    for(var i=0;i<values.length;i++) {
        n=0;
        for(var j=0;j<tmpArray.length;j++) {
            if(tmpArray[j]==values[i]){
            n++;
            }
        }
        if(n==0) {
            tmpArray.push(values[i]);
        }
    }
    tmpStr=tmpArray.join("");
    res=parseInt(tmpStr);
    // console.log(values);
    console.log(res);
  }
  minValue([5, 7, 9, 5, 7]);