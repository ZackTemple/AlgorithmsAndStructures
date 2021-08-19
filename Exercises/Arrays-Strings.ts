// Is Unique: Implement an algorithm to determine if a string has all unique characters.

function hasUniqueCharacters(str: string): boolean {
  let characterCounts = {};

  for (let i = 0; i < str.length; i++) {
    if (characterCounts[str[i]]) {
      return false;
    } else {
      characterCounts[str[i]] = true;
    }
  }

  return true;
}

// Check Permutation: Given two strings, write a method to decide if one is a permutation of the other

function isPermutation(string1: string, string2: string): boolean {
  if (string1.length !== string2.length) return false;

  let string1Counts = {};

  for (let i = 0; i < string1.length; i++) {
    string1Counts[string1[i]] = (string1Counts[string1[i]] || 0) + 1;
  }

  for (let i = 0; i < string2.length; i++) {
    if (!string1Counts[string2[i]]) {
      return false
    } else {
      string1Counts[string2[i]] -= 1;
    }
  }

  return true;
}

// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement
// of letters. The palindrome does not need to be limited to just dictionary words.

// Does not include space handling
function permutationOfPalindrome(str: string): boolean {
  const stringHasEvenNumOfChars = str.length % 2 === 0;
  const stringCounts = {};
  let numOfOddCounts = 0;

  for (let i = 0; i < str.length; i++) {
    stringCounts[str[i]] = (stringCounts[str[i]]) || 0 + 1;
  }

  for (let char in stringCounts) {
    let isOddCount = stringCounts[char] % 2 !== 0;

    if (isOddCount) {
      if (stringHasEvenNumOfChars) return false;
    } else {
      if (numOfOddCounts > 0) {
        return false;
      } else {
        numOfOddCounts += 1;
      }
    }
  }

  return true;
}
