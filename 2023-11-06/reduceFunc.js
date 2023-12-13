/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let numLength = nums.length;
  if (numLength === 0) return init;
  let val = init;
  for (let i = 0; i < numLength; i++) {
    val = fn(val, nums[i]);
  }
  return val;
};
nums = [];
fn = function sum(accum, curr) {
  return 0;
};
init = 25;

var result = reduce(nums, fn, init);
console.log(result);
