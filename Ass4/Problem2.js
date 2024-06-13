function transposeGrid(grid) {
    let numRows = grid.length;
    let numCols = grid[0].length;
    let transposedGrid = [];

    for (let col = 0; col < numCols; col++) {
        transposedGrid[col] = [];
        for (let row = 0; row < numRows; row++) {
            transposedGrid[col][row] = grid[row][col];
        }
    }

    return transposedGrid;
}

let grid1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let transposedGrid = transposeGrid(grid1);
console.log(transposedGrid);
