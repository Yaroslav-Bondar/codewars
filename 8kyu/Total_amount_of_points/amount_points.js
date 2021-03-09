function points (table) {
    let total_scores = 0;
    for (let i=0; i<table.length; i++) {
        if (Number(table[i][0])>Number(table[i][2])) {
            total_scores+=3;
        }
        else if (Number(table[i][0])==Number(table[i][2])) {
            total_scores+=1;
        }         
    }  
    return total_scores;    
}
points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']);