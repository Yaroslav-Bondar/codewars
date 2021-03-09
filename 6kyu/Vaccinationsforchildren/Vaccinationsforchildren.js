vaccine = {
    fiveInOne : ['8 weeks', '12 weeks', '16 weeks'],
    pneumococcal : ['8 weeks', '16 weeks'],
    rotavirus : ['8 weeks', '12 weeks'],
    meningitisB : ['8 weeks', '16 weeks', '12 months'],
    hibMenC : ['12 months'],
    measlesMumpsRubella : ['12 months', '40 months'],
    fluVaccine : ['september','october','november'],
    preSchoolBooster : ['40 months']
};
function vaccineList(age, status, month) {
    var res=[],res2=[],count=0;
    for (var key in vaccine) {
        for (var i=0; i<vaccine[key].length; i++) {
            if (vaccine[key][i]==age || vaccine[key][i]==status) {
                res.push(key);
            } else if ((month=='september' || month=='october' || month=='november') && (vaccine[key][i]=='september' || vaccine[key][i]=='november' || vaccine[key][i]=='october')) {
                res.push('offer' + ' ' + key);
            }
        }
    }
    res2.push(res[0]);
    for (var i=0; i<res.length; i++) {
        count=0;
        for (var j=0; j<res2.length; j++) {
            if (res2[j]==res[i]) {
                count++;
            }
        }
        if (!count) {
            res2.push(res[i]);
        }
    }
    console.log(res2.sort());
};
vaccineList('12 weeks','up-to-date','december');

/* Vaccinations for children under 5
You have been put in charge of administrating vaccinations for children in your local area. Write a function that will generate a list of vaccines for each child presented for vaccination, based on the child's age and vaccination history, and the month of the year.

The function takes three parameters: age, status and month
The parameter 'age' will be given in weeks up to 16 weeks, and thereafter in months. You can assume that children presented will be scheduled for vaccination (eg '16 weeks', '12 months' etc).
The parameter 'status' indicates if the child has missed a scheduled vaccination, and the argument will be a string that says 'up-to-date', or a scheduled stage (eg '8 weeks') that has been missed, in which case you need to add any missing shots to the list. Only one missed vaccination stage will be passed in per function call.
If the month is 'september', 'october' or 'november' add 'offer fluVaccine' to the list.
Make sure there are no duplicates in the returned list, and sort it alphabetically.
Example input and output
input     ('12 weeks', 'up-to-date', 'december')
output    ['fiveInOne', 'rotavirus']

input     ('12 months', '16 weeks', 'june')
output     ['fiveInOne', 'hibMenC', 'measlesMumpsRubella', 'meningitisB', 'pneumococcal']

input     ('40 months', '12 months', 'october') 
output    ['hibMenC', 'measlesMumpsRubella', 'meningitisB', 'offer fluVaccine', 'preSchoolBooster'] */