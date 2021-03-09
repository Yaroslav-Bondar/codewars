calculateTotal=(team1, team2) => {
    team1.reduce ( (prev,item) => prev+item,0) > team2.reduce ( (prev,item) => prev+item,0) ? true : false;
}
calculateTotal([57,2,1],[]);

/* Oh no! Timmy's reduce is causing problems, Timmy's goal is to calculate the two teams scores and return the winner but timmy has gotten confused and sometimes teams don't enter their scores, total the scores out of 3! Help timmy fix his program!

Return true if team 1 wins or false if team 2 wins! */
