export function factorializeANumber(num: number): number {
  let total = 0;

  for (let i = 1; i < num + 1; i++) {
    total *= i;
  }

  return total;
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));
