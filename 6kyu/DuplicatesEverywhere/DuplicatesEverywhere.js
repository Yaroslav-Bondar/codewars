const removeDuplicateIds = (obj) => {
    let indexObj={};
    for (let key in obj) {
        indexObj[key]=[];
        for (var i=0; i<obj[key].length; i++) {
            for (let j=obj[key].length; j>i; j--) {
                if (obj[key][i]==obj[key][j]) {
                    delete obj[key][j];
                }
            }
        }
    }
    for ( var key in obj) {
        for ( var key2 in obj) {
            for (var i=0; i<obj[key].length; i++) {
                for (var j=0; j<obj[key2].length; j++) { 
                        if (key!==key2 && obj[key][i]==obj[key2][j] && obj[key][i]!==undefined) { 
                            delete obj[key][i];
                        }
                    }
                }
            }
        }
    for (let key in obj) {
        indexObj[key]=[];
        for (var i=0; i<obj[key].length; i++) {
            if(obj[key][i]!==undefined) {
                indexObj[key].push(obj[key][i]);
            }
        }    
    }        
    console.log(indexObj);
};
removeDuplicateIds( { 
"432": ["A", "A", "B", "D"],
"53": ["L", "G", "B", "C"],
"236": ["L", "A", "X", "G", "H", "X"],
"11": ["P", "R", "S", "D"]
 } );


/* You are given a table, in which every key is a stringified number, and each corresponding value is an array of characters, e.g.

{
  "1": ["A", "B", "C"],
  "2": ["A", "B", "D", "A"],
}
Create a function that returns a table with the same keys, but each character should appear only once among the value-arrays, e.g.

{
  "1": ["C"],
  "2": ["A", "B", "D"],
}
Rules
Whenever two keys share the same character, they should be compared numerically, and the larger key will keep that character. That's why in the example above the array under the key "2" contains "A" and "B", as 2 > 1.
If duplicate characters are found in the same array, the first occurance should be kept.
 */
