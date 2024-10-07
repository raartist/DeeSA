const arr = [2, 4, 7, 8];
const target = 6;

// return indeces which are making target num after addition

// 1. looping - bruteforce method - n square

// function twoSum(arry,target){
//     const indeces = [];
//     for(let i = 0; i < arry.length; i++){
//         for(let j = i+1; j < arry.length; j++){
//             if(arry[i]+arry[j]=== target){
//                 indeces.push(i);
//                 indeces.push(j);
//             }
//         }
//     }
//     return indeces;
// }

// 2. subtracting from target and find the index

function twoSum(arry, target) {
  const myMap = new Map();
  for (let i = 0; i < arry.length; i++) {
    const pairTarget = target - arry[i];
    if (myMap.has(pairTarget)) return [i, myMap.get(pairTarget)];
    myMap.set(arry[i], i);
  }
}

console.log(twoSum(arr, target));
