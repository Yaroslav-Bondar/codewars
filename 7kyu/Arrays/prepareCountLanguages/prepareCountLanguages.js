var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];
var list2 = [{"firstName":"Maria","lastName":"Y.","country":"Cyprus","continent":"Europe","age":30,"language":"Java"},{"firstName":"Yusuf","lastName":"N.","country":"Turkey","continent":"Europe","age":22,"language":"Python"},{"firstName":"Sumayah","lastName":"M.","country":"Tajikistan","continent":"Asia","age":30,"language":"Ruby"},{"firstName":"Emily","lastName":"A.","country":"Northern Ireland","continent":"Europe","age":32,"language":"JavaScript"},{"firstName":"Ellen","lastName":"E.","country":"Finland","continent":"Europe","age":55,"language":"Ruby"},{"firstName":"Madison","lastName":"U.","country":"United States","continent":"Americas","age":32,"language":"Ruby"},{"firstName":"Rimas","lastName":"C.","country":"Jordan","continent":"Asia","age":44,"language":"Java"},{"firstName":"Aya","lastName":"D.","country":"Libya","continent":"Africa","age":39,"language":"C"},{"firstName":"Hanna","lastName":"L.","country":"Hungary","continent":"Europe","age":29,"language":"JavaScript"},{"firstName":"Sara","lastName":"Y.","country":"Montenegro","continent":"Europe","age":39,"language":"C"}];

function countLanguages(list) {
    let countLang = {};
countLang = list.reduce((prev, item) => {
        if (item.language in prev) 
            prev[item.language]++;
        else 
            prev[item.language] = 1;
        return prev;
    }, {});
    console.log(countLang);
}
countLanguages(list2);

/* Description:
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object (associative array in PHP) which includes the count of each coding language represented at the meetup.

For example, given the following input array:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];
your function should return the following object (associative array in PHP):

{ C: 2, JavaScript: 1, Ruby: 1 }
Notes:

The order of the languages in the object does not matter.
The count value should be a valid number.
The input array will always be valid and formatted as in the example above.




This kata is part of the Coding Meetup series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like: forEach, filter, map, reduce, some, every, find, findIndex. Other approaches to solving the katas are of course possible. */