function bitsWar(n) {
    var odds='', evens='', oddsA=[], evensA=[],countEvens,countOdds;
    n.map( item => item%2==0 ? evens+=item.toString(2) : odds+=item.toString(2) ,0);
    evensA=evens.split("");
    console.log(evensA);
    oddsA=odds.split("");
    console.log(oddsA);
    countEvens = evensA.reduce( (prev,item) => Number(item) ? prev+=1 : Number(item)==-1 ? prev+=-1 : prev+0 ,0);
    countOdds = oddsA.reduce( (prev,item) => Number(item) ? prev+=1 : Number(item)==-1 ? prev+=-1 : prev+0 ,0);
    return countEvens > countOdds ? 'evens win' : countEvens < countOdds ? 'odds win' : countEvens == countOdds ? 'tie' : ''; 
}

// bitsWar([7,-3,-2,6]);
// bitsWar([7,-3,20]);
bitsWar([1,5,12]);