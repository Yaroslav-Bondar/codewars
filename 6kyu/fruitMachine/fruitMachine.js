reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
reel2 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
reel3 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
spin = [5,5,1];
// reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
// reel2 = ["Bar", "Wild", "Queen", "Bell", "King", "Seven", "Cherry", "Jack", "Star", "Shell"];
// reel3 = ["Bell", "King", "Wild", "Bar", "Seven", "Jack", "Shell", "Cherry", "Queen", "Star"];
// spin = [5,4,3];
// reel1 = ["King", "Jack", "Wild", "Bell", "Star", "Seven", "Queen", "Cherry", "Shell", "Bar"];
// reel2 = ["Star", "Bar", "Jack", "Seven", "Queen", "Wild", "King", "Bell", "Cherry", "Shell"];
// reel3 = ["King", "Bell", "Jack", "Shell", "Star", "Cherry", "Queen", "Bar", "Wild", "Seven"];
// spin = [0,5,0];
reels = [reel1, reel2, reel3];

function fruit(reels, spins){
    let scores = ["Jack", "Queen", "King", "Bar", "Cherry", "Seven", "Shell", "Bell", "Star", "Wild"];
    let amountSpin, amountScores = [], g, totalScore;
    amountSpin = spins.reduce((obj, item, i) => {      // подсчитываем общее количество пинов, сохраняем в объекте
        if (reels[i][item] in obj) {
            obj[reels[i][item]] += 1;
        } 
        else {
            obj[reels[i][item]] = 1;
        }
        return obj;
    },[]);
    g = 0;
    for ( key in amountSpin) {                        // конвертируем общее колич. пинов из объекта в массив
        amountScores.push([amountSpin[key]]);
        amountScores[g].push(key);
        g++;
    }
    amountScores.sort((a, b) => {                    // сортируем по убыванию массив с очками, узнаем максимальное кол. очков по первому елементу массива 
        if (a[0] > b[0])
            return -1;
        if (a[0] < b[0])
            return 1;
        if (a[0] == b[0])
            return 0;
    });
    if (amountScores[0][0] == 2 && amountScores[1][1] === 'Wild') {   // подсчитываем очки в соответствии с правилами игры
        totalScore = 2 * (scores.indexOf(amountScores[0][1]) + 1);
    }
    if (amountScores[0][0] == 2 && amountScores[1][1] !== 'Wild') {
        totalScore = scores.indexOf(amountScores[0][1]) + 1;
    }
    if (amountScores[0][0] == 3) {
        totalScore = 10 * (scores.indexOf(amountScores[0][1]) + 1);
    }
    if (amountScores[0][0] < 2) {
        totalScore = 0;
    }
    console.log(totalScore);
}
fruit(reels, spin);

/* Task
You will be given three reels of different images and told at which index the reels stop. From this information your job is to return the score of the resulted reels.
Rules
1. There are always exactly three reels

2. Each reel has 10 different items.

3. The three reel inputs may be different.

4. The spin array represents the index of where the reels finish.

5. The three spin inputs may be different

6. Three of the same is worth more than two of the same

7. Two of the same plus one "Wild" is double the score.

8. No matching items returns 0.
Scoring
Item
Three of the same
Two of the same
Two of the same plus one Wild
Wild
100
10
N/A
Star
90
9
18
Bell
80
8
16
Shell
70
7
14
Seven
60
6
12
Cherry
50
5
10
Bar
40
4
8
King
30
3
6
Queen
20
2
4
Jack
10
1
2
 
Returns
Return an integer of the score.
Example
Initialise
reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
reel2 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
reel3 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
spin = [5,5,5];
result = fruit([reel1,reel2,reel3],spin);
Scoring
reel1[5] == "Cherry"
reel2[5] == "Cherry"
reel3[5] == "Cherry"

Cherry + Cherry + Cherry == 50
Return
result == 50
Good luck and enjoy! */