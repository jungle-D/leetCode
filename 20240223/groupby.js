Array.prototype.groupBy = function (fn) {
  return this.reduce((pre, cur) => {
    const key = fn(cur);
    pre[key] ||= [];
    pre[key].push(cur);
    return pre;
  }, {});
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let fn = function (n) {
  return String(n > 5);
};

console.log(arr.groupBy(fn));
console.log(arr);
