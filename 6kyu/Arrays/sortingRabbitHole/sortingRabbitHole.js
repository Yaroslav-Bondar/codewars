function deepSort(arr, asc) {
    arr.sort((a, b) => {
        if (typeof a === 'object') {
            
        }
            return a - b;
    });  
    // arr[4]=1;
    if (typeof arr[4] === 'object')
        console.log(arr[4]);

    
}
deepSort([7, 4, 3, 4, [-5, -4]], true);