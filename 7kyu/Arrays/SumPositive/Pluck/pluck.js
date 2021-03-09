function pluck(objs, name) {
    let arrRes = [], tmpArr;
    objs.forEach(element => {
        tmpArr = [];
        for (key in element) {
            if (key === name)
                tmpArr.push(element[key]);
        }
        if (tmpArr.length !== 0) {
            tmpArr.forEach(element => {
                arrRes.push(element);
            });
        } else {
            arrRes.push(undefined);
        }
    });
    console.log(arrRes);
}
pluck([{a:1}, {a:2}], 'a'); 
// pluck([{a:1, b:3}, {a:2}], 'b');


/* Description:
Implement a function which takes a sequence of objects and a property name, and returns a sequence containing the named property of each object.

For example:

pluck([{a:1}, {a:2}], 'a')      // -> [1,2]
pluck([{a:1, b:3}, {a:2}], 'b') // -> [3, undefined]
If an object is missing the property, you should just leave it as undefined/None in the output array.

FUNDAMENTALSFUNCTIONAL PROGRAMMINGDECLARATIVE PROGRAMMINGUTILITIESARRAYS */