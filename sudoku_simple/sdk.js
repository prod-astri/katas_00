function sudoku(p) {
    let puzzle = [...p]
    // console.log(puzzle);
    console.log('starting...')
    let possible = puzzle.map(line => {
        return line.map(el => el !== 0 ? [el] : [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    })
    // console.log(possible);
    while (!isDone(puzzle)) {
        // console.clear()
        // puzzle = puzzle.map(f => f.map(e => e === 0 ? 1 : e))
        // console.log("puzzle: ")
        // console.table(puzzle);
        for (let line in puzzle) {
            // console.log('line: ' + puzzle[line])
            for (let row in puzzle[line]) {
                if (puzzle[line][row] !== 0) checkMatches(line, row, puzzle, possible)
                // console.log(puzzle[line][row]);
            }
        }


        // console.log(isDone(puzzle) ? 'SOLVED' : 'not yet...')
        console.table(puzzle)
        console.table(possible)
    }
}

function checkMatches(line, row, puzzle, possible) {
    for (let i of possible[line][row]) {
        console.log("checkMatches " + line + row + possible[line][row])
        if (puzzle[line].includes(i)
            || puzzle.map(l => l[row]).filter(r => r === i).length > 0
            || checkSquare(line, row, puzzle)
        ) {
            possible[line][row] = possible[line][row].splice(possible[line][row].indexOf(i), 1);
            if (possible[line][row].length === 1) {
                console.log("match!")
                puzzle[line][row] = possible[line][row][0];
            }
        }
    }
}

function checkSquare(line, row, puzzle) {
    let numberTested = puzzle[line][row]
    console.log('checkSquare ' + numberTested)
    let x = 0;
    if (row >= 3 && row < 6) x = 3;
    else if (row >= 6) x = 6;
    let y = 0;
    if (line >= 3 && line < 6) y = 3;
    else if (line >= 6) y = 6;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (numberTested === puzzle[x + i][y + j]) {
          return true;
        }
      }
    }
    return false;
  }

function isDone(puzzle) {
    for (let line of puzzle) {
        for (let number of line) {
            if (number === 0) return false;
        }
    }
    return true;
}

// console.log(
//     isDone([
//         [5, 3, 4, 6, 7, 8, 9, 1, 2],
//         [6, 7, 2, 1, 9, 5, 3, 4, 8],
//         [1, 9, 8, 3, 4, 2, 5, 6, 7],
//         [8, 5, 9, 7, 6, 1, 4, 2, 3],
//         [4, 2, 6, 8, 5, 3, 7, 9, 1],
//         [7, 1, 3, 9, 2, 4, 8, 5, 6],
//         [9, 6, 1, 5, 3, 7, 2, 8, 4],
//         [2, 8, 7, 4, 1, 9, 6, 3, 5],
//         [3, 4, 5, 2, 8, 6, 1, 7, 9]]));

sudoku([
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]]);
