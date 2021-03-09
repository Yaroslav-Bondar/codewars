var maze = [[1,1,1,1,1,1,1],
            [1,0,0,0,0,0,3],
            [1,0,1,0,1,0,1],
            [0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,2,1,0,1,0,1]];

function mazeRunner(maze, way) {
    let coord = {
        x: 0,
        y: 0,
    }, finish;
    coord.y = maze.findIndex(item => -1 != (coord.x = item.findIndex(value => value == 2))); // находим позицию старта
    console.log(coord);
    for (let i = 0; i < way.length; i++) {
        if (way[i] === "N")
            coord.y--
            if (maze[coord.y] === undefined || maze[coord.y] === undefined)
                break;
            if (maze[coord.y][coord.x] == 3 || maze[coord.y][coord.x] == 1)
                break;
        if (way[i] === "S")
            coord.y++
            if (maze[coord.y] === undefined || maze[coord.y] === undefined)
                break;
            if (maze[coord.y][coord.x] == 3 || maze[coord.y][coord.x] == 1)
                break;
        if (way[i] === "W")
            coord.x--
            if (maze[coord.y] === undefined || maze[coord.y] === undefined)
                break;
            if (maze[coord.y][coord.x] == 3 || maze[coord.y][coord.x] == 1)
                break;
        if (way[i] === "E")
            coord.x++  
            if (maze[coord.y] === undefined || maze[coord.y] === undefined)
                break;
            if (maze[coord.y][coord.x] == 3 || maze[coord.y][coord.x] == 1)
                break;
    }
    finish = maze[coord.y] === undefined || maze[coord.y] === undefined ? 'Dead' : maze[coord.y][coord.x] == 3 ? 'Finish' : maze[coord.y][coord.x] == 0 ? 'Lost' : 'Dead';
    // finish = (maze[coord.y][coord.x] == 3 || maze[coord.y][coord.x] == 1 && maze[coord.y][coord.x] !== undefined) ? finish = 'Finish' : (maze[coord.y][coord.x] === 0) ? finish = 'Lost' : finish = 'Dead';  // анализируем куда пришли
    console.log(coord);
    console.log(finish);
}
// mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E"]);
// mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E","W","W"]);
// mazeRunner(maze,["N","N","N","N","N","E","E","S","S","S","S","S","S"]);
mazeRunner(maze,["N","N","N","W","W"]);

/* Introduction
Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!
Task
You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.
The Maze array will look like

maze = [[1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]]
..with the following key

      0 = Safe place to walk
      1 = Wall
      2 = Start Point
      3 = Finish Point
  direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
Rules
1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.

2. The start and finish positions will change for the final tests.

3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.

4. If you reach the end point before all your moves have gone, you should return Finish.

5. If you hit any walls or go outside the maze border, you should return Dead.

6. If you find yourself still in the maze after using all the moves, you should return Lost.
Good luck, and stay safe! */