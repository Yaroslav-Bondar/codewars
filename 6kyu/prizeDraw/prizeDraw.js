function rank(st, we, n) {
    if (st.length == 0)
        return 'No participants'; 
    if (st.split(',').length < n)
        return 'Not enough participants';    
    let alphabet = [], winNum, stArr = st.split(',');
    for (let i = 97; i <= 122; i++) {               // get the alphabet
        alphabet.push(String.fromCharCode(i));
    }
    winNum = st.split(',').map(item => item.split('')).reduce((prev, val, i) => {    // get winning numbers
        prev.push(val.reduce((sum, item) => {                                       // get sum of letters in a name  
            sum += alphabet.indexOf(item.toLowerCase()) + 1;
            return sum;
        },0));
        prev[i] = [((prev[i] + val.length) * we[i])];                                // sum of letters in a name + winning number
        prev[i].push(stArr[i]);                                                      // [sum of letters in a name + winning number, + Name] as array
        return prev;
    },[]);
    winNum.sort((a, b) => {                                                          // sorting ...
        if (a[0] == b[0]) {
            if (a[1] < b[1]) {
                return -1;
            }
            else {
                return 1;
            }
        }
        if (a[0] < b[0]) {
            return 1
        }
        else {
            return -1
        }
    });    
    console.log(winNum[n - 1][1]);
}
// rank("Addison,Jayden,Sofia,Michael,Andrew,Paul,Benjamin", [4, 2, 1, 4, 3, 2, 2], 4);
// rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 4);
rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 8);

/* Description:
To participate in a prize draw each one gives his/her firstname.

Each letter of a firstname has a value which is its rank in the English alphabet. A and a have rank 1, B and b rank 2 and so on.

The length of the firstname is added to the sum of these ranks hence a number som.

An array of random weights is linked to the firstnames and each som is multiplied by its corresponding weight to get what they call a winning number.

Example:
names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
weights: [1, 4, 4, 5, 2, 1]

PauL -> som = length of firstname + 16 + 1 + 21 + 12 = 4 + 50 -> 54
The *weight* associated with PauL is 2 so PauL's *winning number* is 54 * 2 = 108.
Now one can sort the firstnames in decreasing order of the winning numbers. When two people have the same winning number sort them alphabetically by their firstnames.

Task:
parameters: st a string of firstnames, we an array of weights, n a rank

return: the firstname of the participant whose rank is n (ranks are numbered from 1)

Example:
names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
weights: [1, 4, 4, 5, 2, 1]
n: 4

The function should return: "PauL"
Notes:
The weight array is at least as long as the number of names, it may be longer.

If st is empty return "No participants".

If n is greater than the number of participants then return "Not enough participants".

See Examples Test Cases for more examples.

FUNDAMENTALSSTRINGSSORTINGALGORITHMS */