// function addToObj (element, repo) {
//     if (element in repo) {
//         repo[element] += amount;
//     }
//     else {
//         obj[fname] = amount;
//     }    
// }
function createReport(name) {
    let fname, amount, res, arr, resArr = [];
    res = name.reduce((obj, val) => {
        fname = val.match(/\D/g).join('').toUpperCase().trim();    // get the name of the duck (typeof === string)
        amount = Number(val.match(/[0-9]+/g));
        // console.log(fname);
        if (fname.search(' ') == -1 && fname.length >= 6) {       // If a name has only one word, use the first six letters of the name.
            fname = fname.match(/\D{6}/).join();
            if (fname in obj) {
                obj[fname] += amount;
            }
            else {
                obj[fname] = amount;
            } 
        } 
        else if (fname.search(' ') == -1 && fname.length < 6) {    // If that name has less than six letters, use what is there.
            if (fname in obj) {
                obj[fname] += amount;
            }
            else {
                obj[fname] = amount;
            }
        };
        if (fname.search(' ') >= 0) {    // If a name has two words or more
            if (fname.match(/ /g).length == 1) {      // If a name has two words, take the first three letters of each word.                  
                fname = fname.match(/\b(\w{1,3})/g).join('');
                if (fname in obj) {
                    obj[fname] += amount;
                }
                else {
                    obj[fname] = amount;
                }
            }
            else if (fname.match(/ /g).length == 2) {       // If a name has three words, take the first two letters of each word.
                fname = fname.match(/\b(\w{1,2})/g).join('');
                if (fname in obj) {
                    obj[fname] += amount;
                }
                else {
                    obj[fname] = amount;
                }
            }
            else if (fname.match(/ /g).length == 3) {      // If a name has four words,
                fname = fname.match(/\b\w{1,2}/g).join('');      // take the first letters from the first two words, 
                if (fname in obj) {                               // and the first two letters from the last two words.
                    obj[fname] += amount;
                }
                else {
                    obj[fname] = amount;
                }
            }                                                      
        }
        return obj;
    },{});
    arr = Object.entries(res);
    arr.sort((a, b) => {
        if(a[0] > b[0])
            return 1;
        if(a[0] < b[0])
            return -1;
        if(a[0] == b[0])
          return 0;    
    });
    resArr = resArr.concat(...arr);
    // console.log(fname);
    console.log(res);
    console.log(arr);
    console.log(resArr);
};
createReport(["Common Eider DFFd fdfdfd 6", "Common Eider DFFd 6", "Redhead 3", "Gadwall  1", "Smew 4", "Greater Scaup 10", "Redhead 3",
              "Gadwall 9", "Greater Scaup  15", "Common Eider 6"]);