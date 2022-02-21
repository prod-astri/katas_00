function sudoku(puzzle) {
    // create an array of possible solutions
    let possible = puzzle.map(line => line.map(num => num !== 0 ? [num] : [1, 2, 3, 4, 5, 6, 7, 8, 9]))
    console.table(possible);

    while (!isDone(possible)){
        // console.log("while")
        // check once each num that is not alone
        checkSudoku(puzzle, possible);
    }

    console.log("done! :")
    console.log(possible);
    return possible;
}

function checkSudoku (puzzle, possible){
    // for each el of possible longer than 1, check once the 3 conditions
    // puzzle = puzzle.map(line => line.map(el => el === 0 ? 1 : el));
    checkLine (puzzle, possible)
}

function checkLine (puzzle, possible){
    for (let line in possible){
        for (let arr in line){
            if (possible[line][arr].length > 1){
                for (let el in arr){
                    let checking = possible[line][arr][el]
                    console.log("checking " + checking + 'in line ' + line)
                    if (puzzle[line].indexOf(checking) !== -1){
                        console.log('i found ' + checking + " in line " + line)
                        possible[line][arr] = possible[line][arr].filter(el => el !== checking)
                        if (possible[line][arr].length === 1) {
                            puzzle[line][arr] = checking;
                        };
                    }
                }
            }
        }
    }
    return false
}

// function checkLine (puzzle, possible){
//     for (let line in possible){
//         for (let arr in line){
//             for (let el in arr){
//                 if (puzzle[line].indexOf(possible[line][arr][el]) !== -1){
//                     console.log('i found ' + possible[line][arr][el] + " in line " + line)
//                     return true;
//                 }
//             }
//         }
//     }
//     return false
// }

function isDone(puzzle) {
    for (let l of puzzle) {
        for (let e of l) {
            if (e.length > 0) return false;
        }
    }
    return true;
}

const firstPuzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]];

const firstSolved = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]];

// console.log(isDone(firstPuzzle));
// console.log(isDone(firstSolved));

sudoku(firstPuzzle);