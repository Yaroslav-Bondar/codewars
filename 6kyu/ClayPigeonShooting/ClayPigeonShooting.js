const shoot = x => {
    let score, scoreP1=0, scoreP2=0;
    for (let i = 0; i < x.length; i++) {
        x[i][1] ? score=2 : score=1;
        for (let j = 0; j < x[i][0].P1.length; j++) {
            x[i][0].P1[j]=='X' ? scoreP1+=score : scoreP1+=0; 
        }
        for (let j = 0; j < x[i][0].P2.length; j++) {
            x[i][0].P2[j]=='X' ? scoreP2+=score : scoreP2+=0; 
        }
    }
    scoreP1 > scoreP2 ? console.log('Pete Wins!') : scoreP1 < scoreP2 ? console.log('Phil Wins!') : console.log('Draw!');
}
shoot([[{P1:'XX', P2:'XO'}, true], [{P1:'OX', P2:'OO'}, false], [{P1:'XX', P2:'OX'}, true]]);


/* Pete and his mate Phil are out in the countryside shooting clay pigeons with a shotgun - amazing fun.

They decide to have a competition. 3 rounds, 2 shots each. Winner is the one with the most hits.

Some of the clays have something attached to create lots of smoke when hit, guarenteed by the packaging to generate 'real excitement!' (genuinely this happened). None of the explosive things actually worked, but for this kata lets say they did.

For each round you will receive the following format:

[{P1:'XX', P2:'XO'}, true]

That is an array containing an object and a boolean. Pl represents Pete, P2 represents Phil. X represents a hit and O represents a miss. If the boolean is true, any hit is worth 2. If it is false, any hit is worth 1.

Find out who won. If it's Pete, return 'Pete Wins!'. If it is Phil, return 'Phil Wins!'. If the scores are equal, return 'Draw!'.

Note that as there are three rounds, the actual input (x) will look something like this:

[[{P1:'XX', P2:'XO'}, true], [{P1:'OX', P2:'OO'}, false], [{P1:'XX', P2:'OX'}, true]]

FUNDAMENTALSARRAYSSTRINGSOBJECTS */