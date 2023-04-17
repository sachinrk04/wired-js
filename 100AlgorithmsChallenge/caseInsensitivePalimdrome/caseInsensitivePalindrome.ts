export function isCaseInsensitivePalindrome(inputString: string): boolean {
  const originalLowerCase = inputString.toLocaleLowerCase();
  const reverseWord = originalLowerCase.split("").reverse().join();

  return originalLowerCase === reverseWord;
}

console.log(isCaseInsensitivePalindrome("AaBaa"));
console.log(isCaseInsensitivePalindrome("abac"));
