/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  const arrLength = arr.length;
  let returnedArray = [];
  for (let i = 0; i < arrLength; i++) {
    returnedArray[i] = fn(arr[i], i);
  }
  return returnedArray;
};

function plusone(n) {
  return n + 1;
}

function plusI(n, i) {
  return n + i;
}

function constant(n, i) {
  return 42;
}

let arr = [1, 2, 3];

const newArray = map(arr, constant);
console.log(newArray);

// 该方法其实使用map会很好解决，但是题目要求不能用 array.map
function newMap(arr, fn) {
  return arr.map((item, index) => fn(item, index));
}

const newArray2 = newMap(arr, constant);
console.log(newArray2);
