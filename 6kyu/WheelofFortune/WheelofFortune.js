var c1 = { name: "Bob", scores: [95,4]};
var c2 = { name: "Bill", scores: [90] };
var c3 = { name: "Charlie", scores: [96] };

const winner = candi => {
    let count,arrMax=[],name,maxScores;
    if (candi.length!==3) {
        return (false);
    }
    for (let i = 0; i < candi.length; i++) {
        for ( let key in candi[i] ) {
            if (key=='scores') {
                if (candi[i][key].length>2) {
                    return false;
                }
                count=0;
                for (let j = 0; j < candi[i][key].length; j++) {
                    count+=candi[i][key][j];
                }
                candi[i][key].push(count);
            } 
        }            
    }
    console.log (candi);
    for (let i = 0; i < candi.length; i++) {
        for ( let key in candi[i] ) {
            if (key=='scores') {
                arrMax.push(candi[i][key][candi[i][key].length-1]);
            }
        } 
    }
    console.log (arrMax);
    maxScores=arrMax.reduce((prev,current)=>{
        return prev+current;
    });
    if (maxScores>300) {
        return false;
    }
    maxScores=arrMax.reduce( (prev,current) => {
        return prev<current ? prev=current : prev;
    });
    name=candi.reduce ((prev,current,index) => {
        // if (name==undefined) {
            for (let key in current) {
                if (key=='scores' ) {
                    for (let i = 0; i < current[key].length; i++) {
                        if (current[key][i]==maxScores  ) {
                            prev=current.name;
                                                    
                        }                    
                    }
                }
            }
            return prev;
        // } 
        // else {
        //     return name;
        // }
    },'');
    console.log(name);
};
winner([c1, c2, c3]);

/* Three candidates take part in a TV show.

In order to decide who will take part in the final game and probably become rich, they have to roll the Wheel of Fortune!

The Wheel of Fortune is divided into 20 sections, each with a number from 5 to 100 (only mulitples of 5).

Each candidate can roll the wheel once or twice and sum up the score of each roll. The winner one that is closest to 100 (while still being lower or equal to 100). In case of a tie, the candidate that rolled the wheel first wins.

You receive the information about each candidate as an array of objects: each object should have a name and a scores array with the candidate roll values.

Your solution should return the name of the winner or false if there is no winner (all scored more than 100).

Example:

var c1 = { name: "Bob", scores: [10, 65] };
var c2 = { name: "Bill", scores: [90, 5] };
var c3 = { name: "Charlie", scores: [40, 55] };
winner([c1, c2, c3]); // Returns "Bill"
Please note that inputs may be invalid: in this case, the function should return false.

Potential errors derived from the specifications are:

More or less than three candidates take part in the game.
A candidate did not roll the wheel or rolled it more than twice.
Scores are not valid.
Invalid user entry (no name or no score).
ALGORITHMSGAMESARRAYSOBJECTSLOOPSCONTROL FLOWBASIC LANGUAGE FEATURESFUNDAMENTALS */  