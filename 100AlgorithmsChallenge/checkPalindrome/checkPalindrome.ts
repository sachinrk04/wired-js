export function checkPalindrome(inputString: string): boolean {
  const originalLowerCase = inputString.toLocaleLowerCase();
  const reverseWord = originalLowerCase.split("").reverse().join("");

  return originalLowerCase === reverseWord;
}

console.log(checkPalindrome("aabaa"));
console.log(checkPalindrome("abac"));
console.log(checkPalindrome("a"));
