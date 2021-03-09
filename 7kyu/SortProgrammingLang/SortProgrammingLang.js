var list1 = [  
    { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' },
    { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
    { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
    { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' }
];

function sortByLanguage(list) {
    let obj;
    obj = list.sort(function (a, b) {
        if (a.language > b.language) 
            return 1;
        if (a.language < b.language)
            return -1;     
        if (a.language == b.language) {
            if(a.firstName > b.firstName)
                return 1; 
            if(a.firstName < b.firstName)
                return -1;
        }
    });
    console.log(obj);
}
sortByLanguage(list1);