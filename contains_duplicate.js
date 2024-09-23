// we'll learn if our array contains duplicate elements

// approach1- two nested for loops and if finds return true;
function ifDuplicate1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
}

const arr1 = [1, 2, 3, 1];
const result = ifDuplicate1(arr1);
console.log("Contains Duplicate element? ", result);
