function traverseSpiral(grid) {
    if (grid.length === 0) return [];

    let traversalResult = [];
    let top = 0, bottom = grid.length - 1;
    let left = 0, right = grid[0].length - 1;

    while (top <= bottom && left <= right) {
        // Traverse from left to right along the top row
        for (let i = left; i <= right; i++) {
            traversalResult.push(grid[top][i]);
        }
        top++;

        // Traverse from top to bottom along the right column
        for (let i = top; i <= bottom; i++) {
            traversalResult.push(grid[i][right]);
        }
        right--;

        // Traverse from right to left along the bottom row
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                traversalResult.push(grid[bottom][i]);
            }
            bottom--;
        }

        // Traverse from bottom to top along the left column
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                traversalResult.push(grid[i][left]);
            }
            left++;
        }
    }

    return traversalResult;
}

let grid = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

let result = traverseSpiral(grid);
console.log(result);
