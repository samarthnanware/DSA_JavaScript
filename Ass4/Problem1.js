function rotateMatrix90DegreesClockwise(grid) {
    let size = grid.length;
    for (let row = 0; row < size; row++) {
        for (let col = row + 1; col < size; col++) {
            [grid[row][col], grid[col][row]] = [grid[col][row], grid[row][col]];
        }
    }
    
    for (let row = 0; row < size; row++) {
        grid[row].reverse();
    }
    
    return grid;
}

let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let rotatedGrid = rotateMatrix90DegreesClockwise(grid);
console.log(rotatedGrid);
