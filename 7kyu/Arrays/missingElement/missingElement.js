function getMissingElement(arr) {
    let x; 
    arr.sort((a, b) => {
        return a - b;
    });
    for (let i = 0; i < arr.length; i++) {
        if ( arr [i] != i ) {
            x = i;
            break;
        }        
    }
    console.log(x);
}
// getMissingElement( [9,2,4,5,7,0,8,6,1] );
getMissingElement( [0, 5, 1, 3, 2, 9, 7, 6, 4] );
