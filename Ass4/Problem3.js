function findInGrid(grid, target) {
    if (grid.length === 0 || grid[0].length === 0) {
        return false;
    }

    let numRows = grid.length;
    let numCols = grid[0].length;
    let row = 0;
    let col = numCols - 1;

    while (row < numRows && col >= 0) {
        if (grid[row][col] === target) {
            return true; 
        } else if (grid[row][col] > target) {
            col--; 
        } else {
            row++; 
        }
    }

    return false; 
}

// Example usage:
let grid = [
    [10, 20, 30, 40],
    [15, 25, 35, 45],
    [27, 29, 37, 48],
    [32, 33, 39, 50]
];
let searchValue = 29;

let found = findInGrid(grid, searchValue);
console.log(found); 
