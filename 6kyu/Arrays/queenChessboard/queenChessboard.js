function availableMoves(pos) {
    let moves = [];
    if (typeof pos !== typeof '') {
        console.log(moves);
        return moves;
    }
    let x = ['A','B','C','D','E','F','G','H'], xPos, yPos;
    xPos = x.indexOf(pos[0]);
    yPos = Number(pos[1]);
    if (pos.length > 2 || xPos == -1 || yPos < 1 || yPos > 8) {
        console.log(moves);
        return moves;
    }
    console.log('yPos = ', yPos);
    moves.push('горизонталь в право');
    for (let i = xPos + 1; i < 8; i++) {    // горизонталь в право
        moves.push(x[i] + yPos);
    }
    moves.push('горизонталь в лево');
    for (let i = xPos - 1; i >= 0; i--) {    // горизонталь в лево
        moves.push(x[i] + yPos);
    }
    moves.push('вертикаль в низ');
    for (let i = yPos + 1; i <= 8; i++) {    // вертикаль в низ
        moves.push(x[xPos] + i);
    }
    moves.push('вертикаль в вверх');
    for (let i = yPos - 1; i > 0; i--) {    // вертикаль в вверх
        moves.push(x[xPos] + i);
    }
    moves.push('диагональ вперед в право низ');
    for (let i = xPos + 1, j = yPos + 1; i < 8 && j <= 8; i++, j++) {    // диагональ вперед в право низ
        moves.push(x[i] + j);
    }
    moves.push('диагональ вперед в лево низ');
    for (let i = xPos - 1, j = yPos + 1; i >= 0 && j <= 8; i--, j++) {    // диагональ вперед в лево низ
        moves.push(x[i] + j);
    }
    moves.push('диагональ вперед в право вверх');
    for (let i = xPos + 1, j = yPos - 1; i < 8 && j > 0; i++, j--) {    // диагональ вперед в право вверх
        moves.push(x[i] + j);
    }
    moves.push('диагональ вперед в лево вверх');
    for (let i = xPos - 1, j = yPos - 1; i >= 0  && j > 0; i--, j--) {    // диагональ вперед в лево вверх
        moves.push(x[i] + j);
    }
    console.log(moves.sort());
    return moves;
}
availableMoves('B0');

/* Description:
The queen can be moved any number of unoccupied squares in a straight line vertically, horizontally, or diagonally, thus combining the moves of the rook and bishop. The queen captures by occupying the square on which an enemy piece sits. (wikipedia: https://en.wikipedia.org/wiki/Queen_(chess)).

Task:
Write a function availableMoves(position) which returns possibly moves of chess queen. Returned value should be an array with possible moves sorted alphabetically, exluded starting position.

For example when input position is A1 return value should be:

["A2", "A3", "A4", "A5", "A6", "A7", "A8", "B1", "B2", "C1", "C3", "D1", "D4", "E1", "E5", "F1", "F6", "G1", "G7", "H1", "H8"]

     A   B   C   D   E   F   G   H
   + - + - + - + - + - + - + - + - +
1  | Q | x | x | x | x | x | x | x |
   + - + - + - + - + - + - + - + - +
2  | x | x |   |   |   |   |   |   |
   + - + - + - + - + - + - + - + - +
3  | x |   | x |   |   |   |   |   |
   + - + - + - + - + - + - + - + - +
4  | x |   |   | x |   |   |   |   |
   + - + - + - + - + - + - + - + - +
5  | x |   |   |   | x |   |   |   |
   + - + - + - + - + - + - + - + - +
6  | x |   |   |   |   | x |   |   |
   + - + - + - + - + - + - + - + - +
7  | x |   |   |   |   |   | x |   |
   + - + - + - + - + - + - + - + - +
8  | x |   |   |   |   |   |   | x |
   + - + - + - + - + - + - + - + - +

Q = queen
x = available move
Input:
input position can be any type (array, number, string and so on). If input position is not a string then return empty array.
valid input position is one letter from A to H with number from 1 to 8, for example A1, C8, B3. If input is invalid (for example A10 or H0) then return empty array.
FUNDAMENTALSARRAYSLOOPSCONTROL FLOWBASIC LANGUAGE FEATURES */