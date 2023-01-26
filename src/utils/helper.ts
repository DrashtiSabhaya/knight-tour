import { KnightPosition } from "../constants/types";

export const calculateTourPosibilities = (knightPosition: KnightPosition) => {
  const x: number = parseInt(knightPosition.row);
  const y: number = parseInt(knightPosition.col);

  const rowMovements: number[] = [2, 1, -1, -2, -2, -1, 1, 2];
  const colsMovements: number[] = [1, 2, 2, 1, -1, -2, -2, -1];

  const possibleMoves: number[][] = [];

  for (let i = 0; i < rowMovements.length; i++) {
    if (
      x + rowMovements[i] > 0 &&
      x + rowMovements[i] <= 8 &&
      y + colsMovements[i] > 0 &&
      y + colsMovements[i] <= 8
    ) {
      possibleMoves.push([x + rowMovements[i], y + colsMovements[i]]);
    }
  }
  return possibleMoves;
};
