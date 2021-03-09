function exampleSort(arr,exampleArr) {
    let tmp, tmpPosition, position = 0;
    for (let i = 0; i < exampleArr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            // tmp = exampleArr[i];
            if (arr[j] === exampleArr[i] && j != i) {
                tmp = arr[j];
                tmpPosition = arr[position];
                arr.splice(j,1);
                arr.splice(position,1,tmp);
                arr.splice(j,0,tmpPosition);
                position++;
            }
            else {
                position++;
            }
        }
    }
    console.log(arr);
}
exampleSort([1,2,3,4,5],[2,3,4,1,5]);
// exampleSort([1,2,3,3,3,4,5],[2,3,4,1,5]);