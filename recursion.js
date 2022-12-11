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

function everyOther(str, i = 0) {
  if (i >= str.length) return "";

  return str[i] + everyOther(str, i + 2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0, reversed = []) {
  reversed.push(str[i]);
  if (i === str.length - 1) {
    if (str[i] === reversed[0]) {
      return true;
    } else {
      return false;
    }
  }

  return isPalindrome(str, i + 1, reversed);
  
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr,target,i=0) {
  if(arr[i] === target) return i
  if(i === arr.length) return -1

  return findIndex(arr, target, i + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=0) {
  if(i === str.length) return ""

  return revString(str, i + 1) + str[i]
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let returnVals = []

  function _gatherStrings(obj){
    for(let prop in obj){
      if(typeof obj[prop] === 'string'){
        returnVals.push(obj[prop])
  
      }
      if(typeof obj[prop] === 'object'){
        _gatherStrings(obj[prop])

      }
    }
    return

  }
  _gatherStrings(obj)
  return returnVals
  
}

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
