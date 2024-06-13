function locateSaddlePoint(grid) {
    let numRows = grid.length;
    let numCols = grid[0].length;

    for (let row = 0; row < numRows; row++) {
        let minRowValue = grid[row][0];
        let minColIndex = 0;
        for (let col = 1; col < numCols; col++) {
            if (grid[row][col] < minRowValue) {
                minRowValue = grid[row][col];
                minColIndex = col;
            }
        }

        let isSaddlePoint = true;
        for (let k = 0; k < numRows; k++) {
            if (grid[k][minColIndex] > minRowValue) {
                isSaddlePoint = false;
                break;
            }
        }

        if (isSaddlePoint) {
            return { row: row, column: minColIndex, value: minRowValue };
        }
    }

    return null;
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let saddlePoint = locateSaddlePoint(matrix);
if (saddlePoint) {
    console.log(`Saddle Point found at row ${saddlePoint.row}, column ${saddlePoint.column} with value ${saddlePoint.value}`);
} else {
    console.log("No Saddle Point found in the matrix.");
}
