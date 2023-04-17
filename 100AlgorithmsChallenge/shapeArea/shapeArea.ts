export function shapeArea(n: number): number {
  let area = 1;

  for (let i = 0; i < n; i++) {
    area += 4 * i;
  }

  return area;
}

console.log(shapeArea(2));
console.log(shapeArea(3));
