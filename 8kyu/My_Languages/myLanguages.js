function myLanguages(results) {
    let tmp = [];
    let lang = [];
    let i=0;
    for ( key in results) {
        tmp[i]=results[key];
        i++;
    }
    tmp.sort (function(a,b){return b-a});
    for (i=0; i<tmp.length; i++) {
        for (key in results) {
            if (results[key]>=60 && results[key]==tmp[i]) {
                lang[i]=key;
            }            
        }
    }
    return lang;
}
myLanguages({"C++": 50, "ASM": 10, "Haskell": 20})


/*You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

Note: the scores will always be unique (so no duplicate values)

Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []*/