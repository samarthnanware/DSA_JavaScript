function findCommonItems(grid) {
    let numRows = grid.length;
    let numCols = grid[0].length;

    let commonMap = new Map();
    for (let col = 0; col < numCols; col++) {
        commonMap.set(grid[0][col], 1);
    }

    for (let row = 1; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if (commonMap.has(grid[row][col]) && commonMap.get(grid[row][col]) === row) {
                commonMap.set(grid[row][col], row + 1);
            }
        }
    }

    let commonElements = [];
    for (let [key, value] of commonMap.entries()) {
        if (value === numRows) {
            commonElements.push(key);
        }
    }

    return commonElements;
}

let grid = [
    [1, 2, 1, 4, 8],
    [3, 7, 8, 5, 1],
    [8, 7, 7, 3, 1],
    [8, 1, 2, 7, 9]
];

let result = findCommonItems(grid);
console.log(result);
