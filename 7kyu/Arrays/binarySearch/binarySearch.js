function binarySearch(arr, key) {
    arr.sort((a, b) => { return a - b; });
    console.log(arr);
    let low = 0, high = arr.length -1, mid;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (arr[mid] < key) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
        if (arr[mid] == key) {
            console.log("Position of the found element -> ", mid, "\n", "Found element -> ", arr[mid]);
            break;
        }
    }
}
let arr = [18, 63, 80, 25, 25, 32, 43, 80, 93, 80, 25, 93, -1, 28, -1, -1];
binarySearch(arr, 25);


