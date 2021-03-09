function replaceCommon(str, l) {
    let arrStr, amount = {}, stringRes;
    arrStr = str.split('').sort().filter(item => item != ' ');   // сохраняем все символы строки кроме пробела как елементы массива
    for (let i = 0; i < arrStr.length; i++) {       // подситываем количество каждой буквы в виде пары ключ\значение
        amount[arrStr[i]] = (arrStr.lastIndexOf(arrStr[i]) - arrStr.indexOf(arrStr[i])) + 1;
        i = arrStr.lastIndexOf(arrStr[i]);
    }
    arrStr.sort((a, b) => {                      // сортируем в соответствии с условиями задачи таким образом что первый  елемент соответствует искомой букве
        if (amount[b] > amount[a])
            return 1
        if (amount[b] < amount[a])
            return -1 
        if (amount[b] == amount[a])
            return str.indexOf(a) - str.indexOf(b) 
    });
    stringRes = str.split("").reduce((strRes, item) => {   // заменяем найденную букву на букву с входящих параметров
        if (item != arrStr[0]) {
            strRes += item;
        } else {
            strRes += l;
        }
        return strRes;
    },'');
    console.log(arrStr);
    console.log(amount);
    console.log(str.split(""));
    console.log(stringRes);
}
replaceCommon('my mom loves me as never did', 't');