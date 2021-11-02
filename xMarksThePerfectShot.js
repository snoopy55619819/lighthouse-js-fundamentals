/*Take in a set of moves(north, south, east or west) as list of strings and output-
the final coordinates[x, y] after the moves.
*/
const finalPosition = function (moves) {
  //Current position is defined as [x, y] coordinates.
  let currentPosition = [0, 0];

  for (let i = 0; i < moves.length; i++) {
    //Use switch to move currentPosition based on direction.
    switch (moves[i]) {
    case 'north':
      currentPosition = [currentPosition[0], currentPosition[1] + 1];
      break;
    case 'south':
      currentPosition = [currentPosition[0], currentPosition[1] - 1];
      break;
    case 'east':
      currentPosition = [currentPosition[0] + 1, currentPosition[1]];
      break;
    case 'west':
      currentPosition = [currentPosition[0] - 1, currentPosition[1]];
      break;
    }
  }
  return (currentPosition);
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];  

finalPosition(moves);
//Output: [-1, 4]