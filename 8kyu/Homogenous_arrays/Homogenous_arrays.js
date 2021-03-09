function filterHomogenous(arrays) {
    // Alea iacta est, code legionary!
    var res=[];
    var tmp=[];
    for(var i=0;i<arrays.length;i++) {
        var count=1;
        for(var j=0;j<(arrays[i].length-1);j++) {
            if (typeof arrays[i][j]==typeof arrays[i][j+1]) {
                count++;
            }
        }
        if (arrays[i].length!==count || arrays[i].length==0) {
            res.push(i);
        }  
    }
    console.log("res = ",res);
    for(var j=0;j<res.length;j++) {
        delete arrays[res[j]];
    }
    for(var g=0;g<arrays.length;g++) {
        tmp[g]=arrays[g];
    }
    arrays=[];
    for(var y=0;y<tmp.length;y++) {
        if (typeof tmp[y]!=='undefined') {
            arrays.push(tmp[y]);
        }
    }
    return arrays;
  }
  filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]);

/* Challenge:

Given a two-dimensional array, return a new array which carries over only those arrays from the original, which were not empty and whose items are all of the same type (i.e. homogenous). For simplicity, the arrays inside the array will only contain characters and integers.

Example:

Given [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]], your function should return [[1, 5, 4], ['b']].

Addendum:

Please keep in mind that for this kata, we assume that empty arrays are not homogenous.

The resultant arrays should be in the order they were originally in and should not have its values changed.

No implicit type casting is allowed. A subarray [1, '2'] would be considered illegal and should be filtered out.

FUNDAMENTALSARRAYSFUNCTIONAL PROGRAMMINGDECLARATIVE PROGRAMMING */