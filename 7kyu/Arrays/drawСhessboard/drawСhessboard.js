const chessBoard = (rows, columns) => {
    let resArr = [] ;
    for (let i = 0; i < rows; i++) {
        resArr[i] = [];
        for (let j = 0; j < columns; j++) {
            if (i % 2 === 0) {
                if (j % 2 === 0) {
                    resArr[i][j] = 'O'
                } else {
                    resArr[i][j] = 'X'
                }
            }
            if (i % 2 != 0) {
                if (j % 2 === 0) {
                    resArr[i][j] = 'X'
                } else {
                    resArr[i][j] = 'O'
                }
            }
        }
    }
    console.log(resArr);
}
// chessBoard(3,7);
chessBoard(5,10);

/* Description:
A grid is a perfect starting point for many games (Chess, battleships, Candy Crush!).

Making a digital chessboard I think is an interesting way of visualising how loops can work together.

Your task is to write a function that takes two integers rows and columns and returns a chessboard pattern as a two dimensional array.

So chessBoard(6,4) should return an array like this:

[
    ["O","X","O","X"],
    ["X","O","X","O"],
    ["O","X","O","X"],
    ["X","O","X","O"],
    ["O","X","O","X"],
    ["X","O","X","O"]
]
And chessBoard(3,7) should return this:

[
    ["O","X","O","X","O","X","O"],
    ["X","O","X","O","X","O","X"],
    ["O","X","O","X","O","X","O"]
]
The white spaces should be represented by an: 'O'

and the black an: 'X'

The first row should always start with a white space 'O'

ALGORITHMSPUZZLESGAMESFUNDAMENTALS */
