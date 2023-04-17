export function differentSymbolsNaive(s: string): number {
  //   Method - 1:

  //   const uniqueChars: string[] = [];
  //   const inputChars: string[] = s.split("");

  //   inputChars.forEach((char) => {
  //     if (!uniqueChars.includes(char)) {
  //       uniqueChars.push(char);
  //     }
  //   });
  //   return uniqueChars.length;

  //   Method - 2

  const uniqueChars = {};
  const inputChars: string[] = s.split("");

  inputChars.forEach((char) => {
    uniqueChars[char] = 1;
  });

  return Object.keys(uniqueChars).length;
}

console.log(differentSymbolsNaive("cabca"));
