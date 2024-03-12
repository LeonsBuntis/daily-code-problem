// This problem was asked by Google.

// In linear algebra, a Toeplitz matrix is one in which the elements on any given diagonal from top left to bottom right are identical.

// Here is an example:

// 1 2 3 4 8
// 5 1 2 3 4
// 4 5 1 2 3
// 7 4 5 1 2

// Write a program to determine whether a given input is a Toeplitz matrix.

let isToeplitzMatrix = (n) => {
    const rows = n.length;
    const cols = n[0].length;
    const negativeRows = rows - 1;


    for (let index = 0; index < cols; index++) {
        let result = isDiagonallyEqual(n, index, 0, cols);
        console.log(result[1])

        if (!result[0]) {
            return result[0];
        }
    }
    
    for (let index = 1; index < negativeRows; index++) {
        let result = isDiagonallyEqual(n, 0, index, cols);
        console.log(result[1])

        if (!result[0]) {
            return result[0];
        }
    }

    return true;
};

let isDiagonallyEqual = (n, i, startRow, matrixRowN) => {
    let curVal;
    let depth = 0;

    let message = `Checking `;

    for (let index = startRow; index < n.length; index++) {
        const row = n[index];
        
        if (curVal === undefined){
            curVal = row[i];
            message+= `- ${curVal} `;
        } else {
            let maybeIndex = i + depth;
            if (maybeIndex >= matrixRowN) {
                return [true, message];
            }

            let maybeSame = row[maybeIndex];
            
            message+= ` ${maybeSame} `;

            if (curVal !== maybeSame) {
                return [false, message];
            }
        }

        depth++;
    }

    return [true, message];
}

let input = [
    [1, 2, 3, 4, 8],
    [5, 1, 2, 3, 4],
    [4, 5, 1, 2, 3],
    [7, 4, 5, 1, 2],
    [9, 7, 4, 5, 1]
];

console.log(isToeplitzMatrix(input));