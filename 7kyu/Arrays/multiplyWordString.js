function modifyMultiply (str, pos, num) {
    let count = 0, position, tmpRes = '', res = '';
    for (let i = 0; i < str.length; i++) {   // находим начальную позицию перед искомым словом
        if (str[i] === ' ')
            count++
        if (count === pos) {
            position = i;
            break;
        }
    }
    position++;                              // позиция на первый символ искомого слова
    for (let j = position; j < str.length; j++) { // записываем посимвольно искомое слово в переменную tmpRes
        if (str[j] === ' ')
            break;
        tmpRes += str[j];
    }
    for (let g = 0; g < num; g++) {         // записываем найденное слово в переменную res указанное во входных
        res += tmpRes                       // данных num количество раз в формате "string-string-string-string-string"


        if (g != num - 1)
            res += '-' 
    }
    console.log(res);
}
modifyMultiply("This is a sdsd string sds sds d",3 ,5); 