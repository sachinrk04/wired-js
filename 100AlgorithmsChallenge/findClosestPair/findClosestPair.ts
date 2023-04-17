export function findClosestPair(numbers: number[], sum: number): number {
  let distance = -1;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let distanceSum = numbers[i] + numbers[j];
      let absDistance = Math.abs(i - j);

      if (distanceSum === sum) {
        if (distance === -1 || absDistance < distance) {
          distance = absDistance;
        }
      }
    }
  }

  return distance;
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));
