// check whether two words form an anagram
//anagram is to rearrange words and character count and length remains same

//approach 1 - to sort string and compare both
function checkAnagram1(a, b) {
  return a.split("").sort().join("") === b.split("").sort().join("");
}

//approach 2 - using hashmap
function checkAnagram2(a, b) {
  console.log(a, b);
  if (a.length !== b.length) return false;
  let map = new Map();

  for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
    if (map.has(a[i])) {
      map.set(a[i], map.get(a[i]) + 1);
    } else {
      map.set(a[i], 1);
    }
  }

  for (let i = 0; i < b.length; i++) {
    if (!map.has(b[i])) return false;
    map.set(b[i], map.get(b[i]) - 1);
    if (map.get(b[i]) === 0) map.delete(b[i]);
  }

  if (map.size > 0) return false;
  return true;
}

let a = "anagram",
  b = "nagaram";

let result = checkAnagram2(a, b);
console.log(result);
