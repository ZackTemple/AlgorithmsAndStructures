// Robot in a Grid: Imagine a robot sitting on the upper left corner of grid with r rows and c columns.
// The robot can only move in two directions, right and down, but certain cells are "off limits" such that
// the robot cannot step on them. Design an algorithm to find a path for the robot from the top left to
// the bottom right.

function moveRobot(maze: boolean[][]): string[] {
  if (maze === null || maze.length === 0) return null;
  let path: string[] = [];
  let failedPositions = {};

  function move(row: number, column: number): boolean {
      // base cases
      if (row < 0 || column < 0) return false;
      if (!maze[row][column]) return false;

      // if already visited point and it is invalid, return early
      let point = row.toString() + column.toString();
      if (failedPositions[point]) return false;

      let isAtOrigin = row === 0 && column === 0;
      let decreaseColumn = move(row, column - 1);
      let decreaseRow = move(row - 1, column - 1);
      let isValidPathOrAtOrigin = isAtOrigin || decreaseRow || decreaseColumn;

      if (isValidPathOrAtOrigin) {
        path.push(point);
      } else {
        failedPositions[point] = true;
      }

      return isValidPathOrAtOrigin;
  }

  return move(maze.length - 1, maze[0].length - 1) ? path : null;
}
