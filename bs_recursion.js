export function bs_recursion(arr, target) {
  function bs(arr, target, low, high) {
    let mid = (low + high) / 2;
    //base case
    if (low > high) {
      return -1;
    }
    if (target === arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      low = mid + 1;
      return bs(arr, target, low, high);
    } else {
      return bs(arr, target, low, high - 1);
    }
  }

  const g = bs(arr, target, 0, arr.length - 1);
  console.log("Output from bs_recursion.js ::::: ", g);
}

//note: I learned this in around 4..5 times of repeated practice, so be pateint!
