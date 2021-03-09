function highestRank(arr){
    let count,countArr=[],countObj={},max;
    for (let i = 0; i < arr.length; i++) {
        count=0;
        for (let j = 0; j < arr.length; j++) {   // считаем количество одинаковых элементов в исходном массиве
            if (arr[i]==arr[j]) {
                count++
            }
        }
        if (!(arr[i] in countObj)) {           // добавляем в обьект: ключи- елемент, значение- количество элемента в исходном массиве
            countObj[arr[i]]=count;
        }
    }
    max=countObj[arr[0]];
    for (let key in countObj) {                // поиск максимального повторения елемента 
        if (max<countObj[key]) {
            max=countObj[key];
        }
    }
    for (let key in countObj) {                // добавление всех максимальных повторений в массив
        if (countObj[key]==max) {
            countArr.push(key);
        }
    }
    if (countArr.length>1) {
        max=countArr[0];
        for (let i = 0; i < countArr.length; i++) {   // определение максмального повторяющегося элемента
            if (max<countArr[i]) {
                max=countArr[i];
            }
        }
    } else {
        max=countArr[0];
    }
    console.log(Number(max));
}
highestRank([12, 10, 8, 12, 7, 6, 4, 10,10,10,12,15,15]);

/* Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
FUNDAMENTALSARRAYSOBJECTS */