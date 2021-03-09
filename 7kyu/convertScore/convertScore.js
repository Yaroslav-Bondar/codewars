function scoreboard(string) {
    let scores = {     // слова для счета
        nil: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
    };
    let tmpArr = [[],[]], resArray = [], regexp;
    for (let key in scores) {
        // regexp = new RegExp(`$${key}`);
        console.log(new RegExp(`^${key}`,'gm'));
        if (string.match(new RegExp(`^${key}`,'gm')) != null) {
            resArray.push(scores[key]);
        }
        // if (string.match(new RegExp(`$${key}`)) != null) {
        //     resArray.push(scores[key]);
        // }
    }
    for (let key in scores) {
        if (string.match(new RegExp(`${key}$`)) != null) {
            resArray.push(scores[key]);
        }
    }
    // for (let key in scores) {                          // находим и добавляем в массив слова для счета и их начальные позиции в строке
    //     if (string.indexOf(key) != -1) {
    //         tmpArr[1].push(string.indexOf(key));
    //         tmpArr[0].push(key); 
    //     }
    // }
    // tmpArr[1].sort((a ,b) => {                       // сортируем нйденные позиции по взрастанию
    //     return a - b;
    // });
    // console.log(tmpArr);
    // if (string.indexOf(tmpArr[0][0],tmpArr[1][1]) > 0) {   // добавляем цифровые значения слов для счета в массив в соответствии с их порядком во входной строке
    //     resArray.push(scores[tmpArr[0][1]]);
    //     resArray.push(scores[tmpArr[0][0]]);
    // } else {
    //     resArray.push(scores[tmpArr[0][0]]);
    //     resArray.push(scores[tmpArr[0][1]]);
    // }
    console.log(resArray);
};
// scoreboard("Arsenal just conceded another goal, two nil");
// scoreboard("new score: two three");
// scoreboard("The score is four nil");
// scoreboard("two one");
// scoreboard("two two");
scoreboard("new score two three trex");