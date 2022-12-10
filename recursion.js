/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (i === nums.length) return 1;

  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0) {
  if (i === words.length - 1) return words[i].length;

  let nextWord = longest(words, i + 1);

  if (words[i].length > nextWord) {
    return words[i].length;
  } else {
    return nextWord;
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0) {
  if(i >= str.length) return ""

  return str[i] + everyOther(str, i + 2)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str,starting="",i=0,startingIdx=0) {
  if(i === isPalindrome.length) return starting[startingIdx]

  let check = isPalindrome(str, starting += str[i], i + 1)
 if(startingIdx + 1 === i){
  return true
 }
  if(str[i] === check){
    return starting[startingIdx + 1]
  }else{
    return false
  }

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
