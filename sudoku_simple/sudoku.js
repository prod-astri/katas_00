function sudoku(puzzle) {
  //return the solved puzzle as a 2d array of 9 x 9 
  console.log('starting....')
  let solutions = puzzle.map(line => line.map(num => num !== 0 ? [num] : [1, 2, 3, 4, 5, 6, 7, 8, 9]))
  console.log(solutions)
  while (!isCompleted(puzzle)) {
    for (let line in puzzle) {
      for (let num in line) {
        if (puzzle[line][num] !== 0) {
          // console.log('line: '+ line + '  num: ' + num + '   - ' + puzzle[line][num])
          // checkAvailability(line, num, puzzle, solutions);
        }
      }
    }
  }
  console.log('solved! ' + puzzle)
  return puzzle;
}

function checkAvailability(line, row, puzzle, solutions) {
  console.log('check')
  for (let i of solutions[line][row]) {
    if (puzzle[line].includes(i)
      || puzzle.map(l => l[row]).filter(r => r === i).length > 0
      || checkSquare(line, row, puzzle)
    ) {
      solutions[line][row].splice(solutions[line][row].indexOf(i), 1);
      if (solutions[line][row].length === 1) {
        puzzle[line][row] = solutions[line][row][0];
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

function isCompleted(puzzle) {

  for (let line of puzzle) {
    for (let el of line) {
      if (el === 0) {
      //   console.log(false)
        return false;
      }
    }
  }

  return true;
}

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