function printBoundary(matrix) {
    let numRows = matrix.length;    
    let numCols = matrix[0].length; 

    if (numRows === 1) {
        console.log(matrix[0]);
        return;
    }
    if (numCols === 1) {
        for (let i = 0; i < numRows; i++) {
            console.log(matrix[i][0]);
        }
        return;
    }

    for (let col = 0; col < numCols; col++) {
        console.log(matrix[0][col]);
    }

    for (let row = 1; row < numRows - 1; row++) {
        console.log(matrix[row][numCols - 1]);
    }

    for (let col = numCols - 1; col >= 0; col--) {
        console.log(matrix[numRows - 1][col]);
    }

    for (let row = numRows - 2; row > 0; row--) {
        console.log(matrix[row][0]);
    }
}

let grid = [
    [1, 2, 3],
    [5, 6, 7],
    [1, 2, 3]
];

printBoundary(grid);
