// let input = [
//     "Dasher Tonoyan", "Dancer Moore", "Prancer Chua", "Vixen Hall",
//     "Comet Karavani", "Cupid Foroutan", "Donder Jonker", "Blitzen Claus"
// ];

// let input = ['Akira Mori','Kenjiro Mori','Susumu Mori']
let arr, count=0, tmpElement, resArr;
let input = [
    "Dasher Tonoyan", "Dancer Moore", "Prancer Chua", "Vixen Hall",
    "Comet Karavani", "Cupid Foroutan", "Donder Jonker", "Blitzen Claus"
  ];
function sortReindeer(input) {
    function replace(arr) {
        let tmp;
        arr.forEach( (element,index,mas) => { // замена местами елементов массива
            tmp = mas[index][0];
            mas[index][0] = mas[index][1];
            mas[index][1] = tmp;
        });
    }
    arr = input.map( (value) => { // конвертируем массив строк в массив массивов строк
        return value.split(" ");
    });
    tmpElement = arr[0][1];
    count = arr.reduce ((value, current, index) => { // проверяем одинаковость surname во всем массиве
        if (current[1] === tmpElement) {
            value++    
        }
        return value
    },0);
    if (count == arr.length) {
        arr.reverse();
        resArr = arr.map((element) => {
            return element.join(" ");         // конвертируем массив из массива массивов строк в массив строк
        });
    } else {
        replace (arr);
        replace (arr.sort());
        resArr = arr.map((element) => {
        return element.join(" ");         // конвертируем массив из массива массивов строк в массив строк
    });
    }
    console.log(resArr);
}

sortReindeer(input);

/* Happy Holidays fellow Code Warriors!
Now, Dasher! Now, Dancer! Now, Prancer, and Vixen! On, Comet! On, Cupid! On, Donder and Blitzen! That's the order Santa wanted his reindeer...right? What do you mean he wants them in order by their last names!? Looks like we need your help Code Warrior!

Sort Santa's Reindeer
Write a function that accepts a sequence of Reindeer names, and returns a sequence with the Reindeer names sorted by their last names.

Notes:
It's guaranteed that each string is composed of two words
In case of two identical last names, keep the original order
Examples
For this input:

[
  "Dasher Tonoyan", 
  "Dancer Moore", 
  "Prancer Chua", 
  "Vixen Hall", 
  "Comet Karavani",        
  "Cupid Foroutan", 
  "Donder Jonker", 
  "Blitzen Claus"
]
You should return this output:

[
  "Prancer Chua",
  "Blitzen Claus",
  "Cupid Foroutan", 
  "Vixen Hall", 
  "Donder Jonker", 
  "Comet Karavani",
  "Dancer Moore", 
  "Dasher Tonoyan",
]
ALGORITHMSHACKING HOLIDAYSSORTINGARRAYSSTRINGS */