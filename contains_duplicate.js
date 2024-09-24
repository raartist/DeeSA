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

// approach 2 - map constructor method - like hashmap
function ifDuplicate2(arr) {
  let myMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (myMap.has(arr[i])) {
      return true;
    } else {
      myMap.set(arr[i]);
    }
  }
  return false;
}

//approach 3 - set approach
function ifDuplicate3(arr) {
  let temp = arr;
  let set = new Set(temp);
  if (set.length !== arr.length) {
    return true;
  }
  return false;
}
const arr1 = [1, 2, 3, 4,5];
const result = ifDuplicate3(arr1);
console.log("Contains Duplicate element? ", result);
