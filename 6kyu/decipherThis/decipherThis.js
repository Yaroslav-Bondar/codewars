function decipherThis(str) {
let arr = [], tmp, s = '';
arr = str.split(' ');   // разбиваем строку на массив строк
tmp = arr.reduce((arrStr, item, i) => {
    s = item.match(/\d/g).reduce((num,val) => {num += val; return num},'');    // получаем код первой буквы
    s = item.replace(/\d+/g, String.fromCharCode(Number(s)));   // заменяем код заглавной буквы на букву
    s = s.split('');     // разбиваем строку на массив букв
    tmp = s[1];                 // производим замену второй буквы на последнюю и обратно
    s[1] = s[s.length - 1];
    s[s.length - 1] = tmp;
    arrStr += s.join('');
    if (i != arr.length - 1)         // в конце строки пробел не добавлять
        arrStr += ' ';
    return arrStr;
},'');
console.log(tmp);
};
decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'); 

/* Description:
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
FUNDAMENTALSSTRINGSARRAYSCIPHERSALGORITHMSCRYPTOGRAPHYSECURITY */