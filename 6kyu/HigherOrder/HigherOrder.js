var list1 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 60, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 60, language: 'PHP' },
];
findSenior=list=> {
	for (var key in list) {
		console.log(list[key]);
	}
	var max=list[0]["age"],res=[];
	for (var i=1; i<list.length; i++) {
		if (max<list[i]["age"]) {
			max=list[i]["age"];
		}
	}
	for (var j=0; j<list.length; j++) {
		if (list[j]["age"]==max) {
			res.push(list[j]);
		}
	}
	console.log("res = ",res);
}
findSenior(list1);

/* You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an array which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.

For example, given the following input array:

var list1 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];
your function should return the following array:

[
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
]
Notes:

The input array will always be valid and formatted as in the example above.
 */