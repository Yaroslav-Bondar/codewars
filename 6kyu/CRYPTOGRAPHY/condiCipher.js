
function formKeyAlphabet (key) {
    let index = [], formKey;
    for (let i = 0; i < key.length; i++) {              // находим индексы елементов дублей в строке 
        for (let j = i + 1; j < key.length; j++) {
            if(key.indexOf(key[i], j) != -1 && index.includes(key.indexOf(key[i], j)) === false)
                index.push(key.indexOf(key[i], j))            
        }        
    }
    formKey = key.split('').filter((item, i) => !(index.includes(i)));   // формируем строку (ключ) без дубликатов
    for (let i = 97; i <= 122; i++) {                                    // формируем "key alphabet"
        if (!formKey.includes(String.fromCharCode(i)))
            formKey.push(String.fromCharCode(i));
    }
    return formKey;
}
function encode (message, key, initShift) {
    let enMes, formKey = formKeyAlphabet(key);
    enMes = message.split('').reduce((mes, val) => {                   // кодируем... 
        if (!formKey.includes(val)) {                                  // все чего нет в "key alphabet" не кодируем 
            mes += val;
        } else {
            if (formKey.indexOf(val) + initShift > formKey.length - 1) {                   // если позиция кодирования выходит за пределы размера "key alphabet"
                mes += formKey[initShift - (formKey.length - formKey.indexOf(val))];       // идем по кругу "key alphabet" 
            }
            else {
                mes += formKey[formKey.indexOf(val) + initShift];                          // если позиция кодирования не выходит за пределы размера "key alphabet"
            }
            initShift = formKey.indexOf(val) + 1;                                          //позиция смещения для кодирования следующего елемента  
        }
        return mes;
    },'');
    console.log(enMes);
}
// encode("on the first day i got lost.","cryptogam",10);
function decode (message, key, initShift)  {
    let decMes; var j; formKey = formKeyAlphabet(key);
    decMes = message.split('').reduce((mes, val, index) => { 
        if (!formKey.includes(val)) {                                  // все чего нет в "key alphabet" не кодируем 
            mes += val;
        } 
        else {
            if (formKey.indexOf(val) - initShift < 0) {
                j = formKey.indexOf(val);
                for (let i = 0; i <= initShift; i++) {
                    j--;
                    if (j < 0 ) {
                        j = 26;
                    }
                }
                if (formKey.indexOf(val) % 2 == 0) {
                    initShift = j;               
                }
                else {
                    initShift = j - 1;               
                }
            }
            else if (index == 0) {
                initShift = formKey.indexOf(val) - initShift;
            }
            else {
                initShift = formKey.indexOf(val) - initShift - 1;
                if (initShift < 0)
                    initShift = 25; 
            } 
            mes += formKey[initShift];
        }
        return mes;
    },'')
    console.log(decMes);
    console.log(formKey);
}
// decode("qvf cmnxmdkjfca.p,ab mf,byokf vjhwpcyb","nqhbfgmi", 28);
// "zva nguhbmmgydx.s,ok se,rmafz vpedgbua"
// decode("jxa", "cryptogam", 10);
// decode("abc","keykeykeykey",10);
// decode("jx wnz xrkvz", "cryptogam", 10);
// decode("jx wnz xrkvz jnd l ufd vwcz.","cryptogam", 10);
decode("n ggka cvssb bfe esz omgdyr bqqva","superkey",30);
// decode("q", "nqhbfgmi",8);