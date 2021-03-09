function playerManager(players) {
    if (players.length==0) return [];
    let resArr=[], tmpArr=[], count=0 ;
    tmpArr=players.split(", ");
    tmpArr.forEach((value,index) => {
        if ((index+1) % 2 !== 0) {
            resArr[count] = {};
            resArr[count].player = value;
        }
        else {
            resArr[count].contact = Number(value);
            count++;
        }
    });
    console.log(resArr);
}


playerManager("John Doe, 8167238327, Jane Doe, 816372333");

/* You are the Dungeon Master for a public DnD game at your local comic shop and recently you've had some trouble keeping your players' info neat and organized so you've decided to write a bit of code to help keep them sorted!

The goal of this code is to create an array of objects that stores a player's name and contact number from a given string.

The method should return an empty array if the argument passed is an empty string or nil/None/null.

Examples
Have at thee! */
