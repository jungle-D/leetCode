/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let arrLength = arr.length;
  let returnedArr = [];

  for (let i = 0; i < arrLength; i++) {
    if (fn(arr[i], i)) returnedArr.push(arr[i]);
  }
  return returnedArr;
};
let arr = [-2, -1, 0, 1, 2];
let fn = function plusOne(n) {
  return n + 1;
};
const newArray = filter(arr, fn); // [20, 30]
console.log(newArray);
