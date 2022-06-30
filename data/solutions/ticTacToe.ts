export const ticTacToeSolution = `const ticTacToe = (gameboard) => {
  let result = 'tie';

  for (let i = 0; i < gameboard.length; i++) {
    // There are 4 ways to win for each player, these variables keep track of these counts
    let xCounts = { horizontal: 0, vertical: 0, topBottomDiag: 0, bottomTopDiag: 0 };
    let oCounts = { horizontal: 0, vertical: 0, topBottomDiag: 0, bottomTopDiag: 0 };

    for (let j = 0; j < gameboard[i].length; j++) {
      // check horizontal rows
      if (gameboard[i][j] === 'X') xCounts.horizontal = xCounts.horizontal + 1;
      if (gameboard[i][j] === 'O') oCounts.horizontal = oCounts.horizontal + 1;

      // check vertical columns
      if (gameboard[j][i] === 'X') xCounts.vertical = xCounts.vertical + 1;
      if (gameboard[j][i] === 'O') oCounts.vertical = oCounts.vertical + 1;

      // check topBottom Diagonal

      if (gameboard[j][j] === 'X') xCounts.topBottomDiag = xCounts.topBottomDiag + 1;
      if (gameboard[j][j] === 'O') oCounts.topBottomDiag = oCounts.topBottomDiag + 1;

      // check bottomTop Diagonal
      if (gameboard[2 - j][j] === 'X') xCounts.bottomTopDiag = xCounts.bottomTopDiag + 1;
      if (gameboard[2 - j][j] === 'O') oCounts.bottomTopDiag = oCounts.bottomTopDiag + 1;
    }

    if (
      xCounts.horizontal === 3 ||
      xCounts.vertical === 3 ||
      xCounts.topBottomDiag === 3 ||
      xCounts.bottomTopDiag === 3
    ) {
      result = 'X wins';
      break;
    } else if (
      oCounts.horizontal === 3 ||
      oCounts.vertical === 3 ||
      oCounts.topBottomDiag === 3 ||
      oCounts.bottomTopDiag === 3
    ) {
      result = 'O wins';
      break;
    }
  }

  return result;
};`;
