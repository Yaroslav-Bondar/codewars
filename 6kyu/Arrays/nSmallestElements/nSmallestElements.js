const performantSmallest = (arr, n) => {
    let aArr = arr.map(item => item),
    bArr = [];
    aArr = aArr.sort((a, b) => a - b).filter((item, i) => i < n);
    for (let i = 0, j = 0; i < arr.length; i++, j++) {
        if (bArr.length == n) {
            break;
        }
        else if (aArr.includes(arr[i])) {
            bArr.push(arr[i]);
        }
    }
    console.log(arr);
    console.log(aArr);
    console.log(bArr);
}
performantSmallest([2,1,3,2,3],3);