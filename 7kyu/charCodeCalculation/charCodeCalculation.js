function calc(x) {
    let total1, total2 = '';
    for (let i = 0; i < x.length; i++) {    // конвертируем строку в строку Unicode 
        total2 += x.charCodeAt(i);        
    }
    total1 = total2;
    total1 = total1.split('').reduce((prev, current) => {   // подсчет суммы
        return Number(prev) + Number(current);
    });
    total2 = total2.split('');                   // из строки в массив
    while (total2.indexOf('7') > 0) {         // замена 7 на 1
        total2[total2.indexOf('7')] = '1';
    }
    total2 = total2.reduce((prev, current) => {  // подсчет суммы
        return Number(prev) + Number(current);
    });
    console.log(total1 - total2);
}
// calc('ABC');
calc('aaaaaddddr');
// calc('ifkhchlhfd');

/* Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6
FUNDAMENTALSARRAYSSTRINGSNUMBERSMATHEMATICSALGORITHMS */