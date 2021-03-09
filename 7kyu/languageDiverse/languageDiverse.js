var list1 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
    { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];
var list2 = [{"firstName":"Aya","lastName":"D.","country":"Libya","continent":"Africa","age":39,"language":"JavaScript"},{"firstName":"Noel","lastName":"O.","country":"Albania","continent":"Europe","age":23,"language":"Ruby"},{"firstName":"Laia","lastName":"P.","country":"Andorra","continent":"Europe","age":55,"language":"Ruby"},{"firstName":"Sumayah","lastName":"M.","country":"Tajikistan","continent":"Asia","age":30,"language":"Ruby"},{"firstName":"Rimas","lastName":"C.","country":"Jordan","continent":"Asia","age":44,"language":"JavaScript"},{"firstName":"Noa","lastName":"A.","country":"Israel","continent":"Asia","age":40,"language":"Ruby"},{"firstName":"Krishna","lastName":"G.","country":"Nepal","continent":"Asia","age":22,"language":"Ruby"},{"firstName":"Sebastian","lastName":"W.","country":"Venezuela","continent":"Americas","age":28,"language":"Python"},{"firstName":"Yusuf","lastName":"N.","country":"Turkey","continent":"Europe","age":22,"language":"JavaScript"},{"firstName":"Nareh","lastName":"Q.","country":"Armenia","continent":"Europe","age":30,"language":"Ruby"},{"firstName":"Piotr","lastName":"B.","country":"Poland","continent":"Europe","age":128,"language":"JavaScript"},{"firstName":"Oliver","lastName":"P.","country":"Wales","continent":"Europe","age":29,"language":"JavaScript"},{"firstName":"Hanna","lastName":"L.","country":"Hungary","continent":"Europe","age":29,"language":"Python"},{"firstName":"Kseniya","lastName":"T.","country":"Belarus","continent":"Europe","age":29,"language":"Python"},{"firstName":"Nikola","lastName":"H.","country":"Serbia","continent":"Europe","age":29,"language":"JavaScript"},{"firstName":"Joshua","lastName":"O.","country":"Isle of Man","continent":"Europe","age":39,"language":"Ruby"},{"firstName":"Ramon","lastName":"R.","country":"Paraguay","continent":"Americas","age":29,"language":"Python"},{"firstName":"Agustin","lastName":"V.","country":"Uruguay","continent":"Americas","age":19,"language":"Ruby"},{"firstName":"Agustin","lastName":"M.","country":"Chile","continent":"Americas","age":37,"language":"JavaScript"},{"firstName":"Sofia","lastName":"A.","country":"Denmark","continent":"Europe","age":19,"language":"Python"},{"firstName":"Noel","lastName":"O.","country":"Albania","continent":"Europe","age":23,"language":"Python"},{"firstName":"Fatima","lastName":"A.","country":"Algeria","continent":"Africa","age":25,"language":"JavaScript"},{"firstName":"Laia","lastName":"P.","country":"Andorra","continent":"Europe","age":55,"language":"Ruby"}];

function isLanguageDiverse(list) {
    let langArr = [['Python'], ['Ruby'], ['JavaScript']]; 
    langArr.forEach((item) => {
        item.push(list.reduce((amount, value) => {
            if (item[0] === value.language)
                amount += 1;
            return amount;    
        },0));
    });
    console.log((Math.max(...langArr.map(item => item[1])) / Math.min(...langArr.map(item => item[1]))) <= 2 ? true : false);
}
isLanguageDiverse(list2);

/* Description:
You will be given an array of objects representing data about developers who have signed up to attend the next web development meetup that you are organising. Three programming languages will be represented: Python, Ruby and JavaScript.

Your task is to return either:

true if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher than the number of developers representing any of the remaining programming languages**; or
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];
your function should return false as the number of JavaScript developers (3) is 3 times higher than the number of Python developers (1). It can't be more than 2 times higher to be regarded as language-diverse.

Notes:

The strings representing all three programming languages will always be formatted in the same way (e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'.
The input array will always be valid and formatted as in the example above.
Each of the 3 programming languages will always be represented.

This kata is part of the Coding Meetup series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like: forEach, filter, map, reduce, some, every, find, findIndex. Other approaches to solving the katas are of course possible. */