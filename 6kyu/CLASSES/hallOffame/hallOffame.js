class HallOfFame {
    constructor(size, players) {
        this.size = 5
        if (size === undefined) {
            this.players = []
            for (let i = 0; i < this.size; i++) {
                this.players.push('')                
            }
        }
        else if (players === undefined) {
            this.players = []
            for (let i = 0; i < size; i++) {
                this.players.push('')                
            }
        }
        else if (players.length < size) {
            this.players = players
            for (let i = 0; i <= size - players.length; i++) {
                this.players.push('')
            }
        }
        else {
            this.players = players
        }
    }
    sort() {
        this.players.sort((a, b) => {
            if(a[1] > b[1])
                return -1
            if(a[1] < b[1])
                return 1
            if(a[1] == b[1]) {
                if (a[0] > b[0])
                    return 1
                if (a[0] < b[0])
                    return -1
            }
        });
    }
    get list() {
        let arr = []
        this.sort()
        arr = this.players.map((item) => {
            if (Array.isArray(item)) {
                return item.join().replace(/,/, ': ')
            }
            else {
                return item
            }
        })
        console.log('list ', arr)
        return arr
    }
    add(player) {
        let indexEmptyStr = this.players.findIndex((item) => item === '')
        let indexLastPlayers = this.players.length - 1
        if (indexEmptyStr >= 0) {
            this.players[indexEmptyStr] = player
        }
        else {
            this.sort()
            if (this.players[indexLastPlayers][1] < player[1]) {
                this.players[indexLastPlayers] = player
            }
            else if(this.players[indexLastPlayers][1] == player[1]) {
                if(this.players[indexLastPlayers][0] < player[0]) {
                    this.players[indexLastPlayers] = player
                }
            }
        }
        return this
    }
}
// top3 = new HallOfFame(3,)
// ["Bob: 88","Kim: 88","Zoe: 88"]
top3 = new HallOfFame(3, [['Bob', 88], ['Kim', 88], ['Zoe', 88]])
top3.add(["Bob",89]).add(["Bob",90])
top3.list
// top3.add(["SA",7])
// top3.list
// top3.add(["Adi",45]).add(["Adi",4])
// top3.list
// top = new HallOfFame(3,[["Ada",444],["Bob",2222],["Clo",55]])
// top.list
// top = new HallOfFame(3,[["Ada",444]])
// top.list
// top.add(["A",466]).add(["A",467])
// top.list

/* https://www.codewars.com/kata/59879e52704c4f96540000c1/train/javascript
At least little grasshoper, you reached the   H a l l   O f   F a m e ! ! !

\* **Congrats!** \* **CoRrEcTaMuNdO** \* wellll DDDDDone ! \*
Well, actually, that's only the "Hall Of Fame" kata . . .

Task
Create a HallOfFame object to store some game-of-the-century best players name and score.

On creation a HallOfFame may take 2 arguments :

size : an int (default: 5), defining the size of the Hall.
players : an array of players.
A player is a 2-items array of the form [name, score] with :

name : a string, the name of the player.
score : an int, the score of this player.
An HallOfFame object should provide an attribute list and a method add(player).

list : is an array of player of the form "Name: score", sorted by score in descending order (in alphabetic order of name in case of same score).

eg : ["Alya: 325", "Boris: 253", "Clem: 235"]
list.length is limited to size items. If a "list-slot" is empty, return an "empty-player" ("")

eg : ["Alya: 325", "", ""] // in case only 1st player is provided
add(player) should :

add the player to the list (if its score is high enough).
eventually re-sort the list.
and return the object (to permit chaining adds).
Examples
var top3 = new HallOfFame(3, [["Ada",99], ["Bob","42], ["Clo", 101], ["Dan", 3]])

top3.list -> ["Clo: 101", "Ada: 99", "Bob: 42"] // -- only 3 players kept 'cause size of the Hall is 3

top3.add(["Dan",54])
top3.list -> ["Clo: 101", "Ada: 99", "Dan: 54"]

top3.add(["Eva",75]).add(["Fox",120]).list --> ["Fox: 120","Clo: 101","Ada: 99"]

var top5 = new HallOfFame(); // -- size=5 by default
top5.add(["A",4]).add(["E",3]).add(["I",1])
top5.list --> ["A: 4","E: 3","I: 1","",""] // <-- 2 "empty players" at the end of list

top5.add(["S",5]).add(["T",7])
top5.list --> ["T: 7","S: 5","A: 4","E: 3","I: 1"]
Note: Same player (same name) may appear more than once on a list. . . but not in this kata nor that one !

FUNDAMENTALSARRAYSCLASSESBASIC LANGUAGE FEATURESOBJECT-ORIENTED PROGRAMMING
 */
