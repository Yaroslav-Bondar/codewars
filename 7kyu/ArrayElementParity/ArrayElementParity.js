function solve(arr) {
    // for (let i = 0; i < arr.length; i++) {
    //     if (Math.sign(arr[i])==1) {                 // if positive digit
    //         for (let j = i; j < arr.length; j++) {
    //             if ( (Math.abs(arr[i])===Math.abs(arr[j]) && Math.sign(arr[i])===Math.sign(arr[j]) || 
    //                 ) {

    //             }
    //         }        
    //     }        
    // }
    let eq = false, notEg = false, tmp, count=0;
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = i; j < arr.length; j++) {
    //         if ( (Math.abs(arr[i])===Math.abs(arr[j]) && Math.sign(arr[i])===Math.sign(arr[j]) ||  
    //     }
    // }    

    // arr.forEach((value, i) => {
        // console.log("+++",i,"+++");
        // arr.forEach((element,j) => {
            // console.log(element);
        //    if (value !== element) {
        //         notEg = true; 
        //    }
        //    else if (value === element && i!==j) {
        //        eq = true;
        //    }
        // });
        // if ( (notEg === true && eq === true) || (notEg === true && eq === false) ) {
        //     console.log(value);
        // }
    // });
    // || (arr[i]!=arr[j] && i!=j)
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            // if (arr[i] !== arr[j]) {
            if (((Math.abs(arr[i])===Math.abs(arr[j])) && (Math.sign(arr[i])===Math.sign(arr[j])) && i!=j)) {    
                if (tmp!==arr[i]) {
                    tmp=arr[i];
                    notEg = true;
                }
            }    
            // && (Math.sign(arr[i])!==Math.sign(arr[j]))
            else if (((Math.abs(arr[i])!==Math.abs(arr[j])) && i!=j)) {
                // count++
                // && (count == arr.length-1)
                if (tmp!==arr[i]) {
                    tmp=arr[i];
                    eq = true;
                    
                }
            }
            // else if (arr[i] === arr[j] && i!==j) {
            //    eq = true;
            // }
        }
        if (notEg) {
            console.log(tmp);
        }
        if (eq) {
            console.log(tmp);
        }
        notEg=false;
        eq=false;
        count=0;
    }
};

solve([-3,1,2,3,-1,-4,-2]);