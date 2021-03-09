const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }
const objE = {}

const combine = (...args) => 
    // let resObj={};
    // console.log (args);

    args.reduce((value,current)=> {
        for (key in current) value[key] = key in value ? value[key] + current[key] : value[key] = current[key];  // short solution
        return value  

    },{});
    // for (let i = 0; i < args.length; i++) {
    //     if (Object.keys(args[i]).length !== 0) {
    //         for (key in args[i]) {
                // (!(key in resObj)) ? resObj[key]=args[i][key] : resObj[key]+=args[i][key];   // classic solution
    //         }
    //     }
    // }
    // console.log ("resObj = ",resObj);


combine(objA);

/* Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

An example:

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
The combine function should be a good citizen, so should not mutate the input objects.

FUNDAMENTALSOBJECTSARRAYSHASHESDATA STRUCTURESDICTIONARY */