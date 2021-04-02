// function addToObj (element, repo) {
//     if (element in repo) {
//         repo[element] += amountDucks;
//     }
//     else {
//         obj[fname] = amountDucks;
//     }    
// }
// function createReport(name) {
//     let fname, amountDucks, res, arr, resArr = [];
//     res = name.reduce((obj, val) => {
//         fname = val.match(/\D/g).join('').toUpperCase().trim();    // get the name of the duck (typeof === string)
//         amountDucks = Number(val.match(/[0-9]+/g));
//         // console.log(fname);
//         if (fname.search(' ') == -1 && fname.length >= 6) {       // If a name has only one word, use the first six letters of the name.
//             fname = fname.match(/\D{6}/).join();
//             if (fname in obj) {
//                 obj[fname] += amountDucks;
//             }
//             else {
//                 obj[fname] = amountDucks;
//             } 
//         } 
//         else if (fname.search(' ') == -1 && fname.length < 6) {    // If that name has less than six letters, use what is there.
//             if (fname in obj) {
//                 obj[fname] += amountDucks;
//             }
//             else {
//                 obj[fname] = amountDucks;
//             }
//         };
//         if (fname.search(' ') >= 0) {    // If a name has two words or more
//             if (fname.match(/ /g).length == 1) {      // If a name has two words, take the first three letters of each word.                  
//                 fname = fname.match(/\b(\w{1,3})/g).join('');
//                 if (fname in obj) {
//                     obj[fname] += amountDucks;
//                 }
//                 else {
//                     obj[fname] = amountDucks;
//                 }
//             }
//             else if (fname.match(/ /g).length == 2) {       // If a name has three words, take the first two letters of each word.
//                 fname = fname.match(/\b(\w{1,2})/g).join('');
//                 if (fname in obj) {
//                     obj[fname] += amountDucks;
//                 }
//                 else {
//                     obj[fname] = amountDucks;
//                 }
//             }
//             else if (fname.match(/ /g).length == 3) {      // If a name has four words,
//                 fname = fname.match(/\b\w{1,2}/g).join('');      // take the first letters from the first two words, 
//                 if (fname in obj) {                               // and the first two letters from the last two words.
//                     obj[fname] += amountDucks;
//                 }
//                 else {
//                     obj[fname] = amountDucks;
//                 }
//             }                                                      
//         }
//         return obj;
//     },{});
//     arr = Object.entries(res);
//     arr.sort((a, b) => {
//         if(a[0] > b[0])
//             return 1;
//         if(a[0] < b[0])
//             return -1;
//         if(a[0] == b[0])
//           return 0;    
//     });
//     resArr = resArr.concat(...arr);
//     // console.log(fname);
//     console.log(res);
//     console.log(arr);
//     console.log(resArr);
// };
// /\b\w{3}/g //If a name has two words
// /(\b\w{1}).*?(\b\w{1}).*?(\b\w{2}).*?(\b\w{2})/ // If a name has four words
    // objCount = name.reduce((arr, v) => {    // get the number and names of ducks as array
    //     id = v.match(/[a-z]+/gi).join(' ');
    //     amountDucks = v.match(/\d+/);
    //     arr.push([id, Number(amountDucks[0])]);
    //     arr.sort((a, b) => {
    //         if(a > b) {
    //             return 1;
    //         }
    //         if(a < b) {
    //             return -1
    //         }
    //         if(a == b) {
    //             return 0
    //         }
    //     });
    //     return arr;
    // },[]);
function createReport(name) {
    let id, amountDucks, amountWord, objCount, resArr, nameFor4Words;
    objCount = name.reduce((obj, v) => {    // get the number and names of ducks as object
        id = v.match(/[a-z]+/gi).join(' ');
        amountDucks = v.match(/\d+/);
        if (id in obj) {
            obj[id] += Number(amountDucks[0]);
        }
        else {
            obj[id] = Number(amountDucks[0]);
        }
        return obj;
    },{});
    if ('Labrador Duck' in objCount)
        return ['Disqualified data'];
    objCount = Object.entries(objCount);                  // convert object to array
    objCount.sort((a, b) => {
                if(a > b) {
                    return 1;
                }
                if(a < b) {
                    return -1
                }
                if(a == b) {
                    return 0
                }
            });
    resArr = objCount.reduce((array, value) => {         // get the resulting array
        amountWord = value[0].match(/\b([A-Z])/g);       // get word count in duck name
        amountWord = amountWord.length;                     
        if (amountWord == 1) {
            if (value[0].length < 6) {
                array.push(value[0].toUpperCase(), value[1]);
            }
            else {
                array.push(value[0].substr(0, 6).toUpperCase(), value[1]);
            }
        }
        if (amountWord == 2) {
            array.push(value[0].match(/\b\w{3}/g).join('').toUpperCase(), value[1]);
        }
        if (amountWord == 3) {
            array.push(value[0].match(/\b\w{2}/g).join('').toUpperCase(), value[1]);
        }
        if (amountWord == 3) {
            array.push(value[0].match(/\b\w{2}/g).join('').toUpperCase(), value[1]);
        }
        if (amountWord == 4) {
            nameFor4Words = value[0].match(/(\b\w{1}).*?(\b\w{1}).*?(\b\w{2}).*?(\b\w{2})/i);
            nameFor4Words = nameFor4Words[1] + nameFor4Words[2] + nameFor4Words[3] + nameFor4Words[4]; 
            array.push(nameFor4Words.toUpperCase(), value[1]);
        }
        return array;
        // console.log(amountWord);
    },[]);
    console.log(objCount);
    console.log(resArr);
}
createReport(["Redhead-Redhead Redhead Redhead 3", "Gadwall  1", "Smew 4", "Greater Scaup 10", "Redhead 3", "Gadwall 9", "Greater Scaup  15", "Common Eider 6"]);

/* https://www.codewars.com/kata/5b0737c724c0686bf8000172/train/javascript
 A wildlife study involving ducks is taking place in North America. Researchers are visiting some wetlands in a certain area taking a survey of what they see. The researchers will submit reports that need to be processed by your function.

Input
The input for your function will be an array with a list of common duck names along with the counts made by the researchers. The names and counts are separated by spaces in one array element. The number of spaces between the name and the count could vary; but, there will always be at least one. A name may be repeated because a report may be a combination of surveys from different locations.

An example of an input array would be:

["Redhead 3", "Gadwall 1", "Smew 4", "Greater Scaup 10", "Redhead 3", "Gadwall 9", "Greater Scaup 15", "Common Eider 6"]
Processing
Your function should change the names of the ducks to a six-letter code according to given rules (see below). The six-letter code should be in upper case. The counts should be summed for a species if it is repeated.

Output
The final data to be returned from your function should be an array sorted by the species codes and the total counts as integers. The codes and the counts should be individual elements.

An example of an array to be returned (based on the example input array above) would be:

["COMEID", 6, "GADWAL", 10, "GRESCA", 25, "REDHEA", 6, "SMEW", 4]
The codes are strings in upper case and the totaled counts are integers.

Special Note
If someone has "Labrador Duck" in their list, the whole list should be thrown out as this species has been determined to be extinct. The person who submitted the list is obviously unreliable. Their lists will not be included in the final data. In such cases, return an array with a single string element in it: "Disqualified data"

Rules for converting a common name to a six-letter code:

Hyphens should be considered as spaces.
If a name has only one word, use the first six letters of the name. If that name has less than six letters, use what is there.
If a name has two words, take the first three letters of each word.
If a name has three words, take the first two letters of each word.
If a name has four words, take the first letters from the first two words, and the first two letters from the last two words.
FUNDAMENTALSARRAYSREGULAR EXPRESSIONSDECLARATIVE PROGRAMMINGADVANCED LANGUAGE FEATURESSTRINGS */