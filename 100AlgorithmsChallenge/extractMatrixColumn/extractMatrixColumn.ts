export function extractMatrixColumn(
  matrix: number[][],
  column: number
): number[] {
  const matrixColumn: number[] = [];

  matrix.forEach((row) => matrixColumn.push(row[column]));

  return matrixColumn;
}

console.log(
  extractMatrixColumn(
    [
      [1, 1, 1, 2],
      [0, 5, 0, 4],
      [2, 1, 3, 6],
    ],
    2
  )
);
