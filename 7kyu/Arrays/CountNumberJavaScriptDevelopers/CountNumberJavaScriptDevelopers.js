var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];
const countDevelopers = function (list) {
    let res = list.reduce((prev, current, index) => {
        if (current['continent'] === 'Europe' && current['language'] === 'JavaScript') 
            prev++    
        return prev;
    },0);
    console.log(res);
}
countDevelopers(list1);