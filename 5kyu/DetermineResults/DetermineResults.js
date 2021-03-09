var vaulterArr = 
[{name: "Sergey", results: ["", "O", "XO", "O", "XXO", "XXX", "", ""]},
{name: "Vova", results: ["", "", "", "O", "O", "XO", "XO", "XXX"]},
{name: "Jan", results: ["", "", "", "O", "O", "XO", "XXO", "XXX"]},
{name: "Bob", results: ["", "O", "XO", "O", "XXO", "XXX", "", ""]},
{name: "Bruce", results: ["", "XO", "XXO", "XXX", "", "", "", ""]},
{name: "HerrWert", results: ["XXO", "", "", "", "", "", "", ""]}
];

// var vaulterArr = [ 
// {name: "Sergey", results: ["", "O", "XO", "O", "XXO", "XXX", "", ""]},
// {name: "Jan", results: ["", "", "", "O", "O", "XO", "XXO", "XXX"]},
// {name: "Bruce", results: ["", "XO", "XXO", "XXX", "", "", "", ""]},
// {name: "HerrWert", results: ["XXX", "", "", "", "", "", "", ""]}
// ];
// var solutionObject = {"1st":"Jan","2nd":"Sergey","3rd":"Bruce"};

function scorePoleVault(inputArray) {

    let scorePosObj={}, keyName , count, countX=0, countName, tmp, tmp2, posArr=[], countXArr=[], resObj={};

    for (let i = 0; i < inputArray.length; i++) {
        for (let key in inputArray[i]) {
            if (key=='name') {
                keyName=key;        
            }
            if (key=='results') {                                            
                count=0;
                for (let j = inputArray[i][key].length-1; j >= 0; j--) {
                    if (count==0) {
                        for (let g = inputArray[i][key][j].length-1; g >= 0 ; g--) {
                        // for (let g = 0; g < inputArray[i][key][j].length; g++) {
                            if (inputArray[i][key][j][g]==='O') {
                                // scorePosObj[inputArray[i][keyName]]=[];
                                scorePosObj[inputArray[i][keyName]]=j;
                                // scorePosObj[inputArray[i][keyName]].push(j);  // max position in  the array scores for "O"
                                count++;
                                break;        
                            }                        
                        }
                    } else { break; }
                }
            }
        }
    }

    for (let key in scorePosObj) {
        posArr.push(scorePosObj[key]);
    }
    posArr.sort((a,b)=>{return b-a});

    for (let i = 0; i < posArr.length; i++) {
        tmp=posArr[i];
        for (let j = 0; j < posArr.length; j++) {
            if (tmp===posArr[j] && j>i) {
                for (let g = 0; g < vaulterArr.length; g++) {
                    if (vaulterArr[g]["results"][tmp][vaulterArr[g]["results"][tmp].length-1]==="O") {
                        // console.log("vvv",vaulterArr[g]["name"]["results"][tmp]);        
                        console.log("Name",vaulterArr[g]["name"]);
                        // break;        
                    }
                    // console.log("vvv",vaulterArr[g]["results"][tmp]);
                    // for (key in vaulterArr[g]["results"][tmp])
            }
            countX++;
        }
        // break;
    }
    }    


    for(let i = 0; i < posArr.length; i++) {
        tmp=posArr[i];
        if (tmp2!==tmp) {
            for(let j = 0; j < posArr.length; j++) {
                if (tmp===posArr[j]) {
                    for (let key in scorePosObj) {
                        if (scorePosObj[key]=='results') {
                            console.log(scorePosObj[key]);
                            for (let g = 0; g < scorePosObj['results'].length; g++) {
                                if (g==tmp) {
                                    countX=0;
                                    for (let k = 0; k < scorePosObj['results'][g].length; k++) {
                                        if (scorePosObj[key][g][k]=='X') {
                                            countX++;
                                        }
                                    }
                                    countXArr.push(countX);
                                }       
                            }
                        }
                        scorePosObj[key][tmp]
                    }
                }
            }
        }
        tmp2=tmp;
    }
    console.log("countXArr =",countXArr);
    count=0;
    tmp=undefined;
    for(let i = 0; i < posArr.length; i++) {
        if (tmp!==posArr[i]) {
            count++;
            if (count==1) {
            resObj[count+"st"]='';
            }
            if (count==2) {
                resObj[count+"nd"]='';
            }
            if (count==3) {
                resObj[count+"rd"]='';
            }
            countName=0;
            for(let key in scorePosObj) {
                if ( posArr[i]==scorePosObj[key]) {
                    if (count==1) {
                        resObj[count+"st"]+=key+',';
                        countName++;
                    }
                    if (count==2) {
                         resObj[count+"nd"]+=key+',';
                         countName++;
                    }
                    if (count==3) {
                        resObj[count+"rd"]+=key+',';
                        countName++;
                    }
                }
            }
            if (countName>1) {
                if (count==1) {
                    resObj[count+"st"]+=' (jump-off)';
                }
                if (count==2) {
                    resObj[count+"nd"]+=' (tie)';
                }
                if (count==3) {
                    resObj[count+"rd"]+=' (tie)';
                }
            }
        }
        tmp=posArr[i]
    }
    console.log("scorePosObj = ",scorePosObj);
    console.log("posArr = ",posArr);
    console.log("resObj = ",resObj);
}
scorePoleVault(vaulterArr);