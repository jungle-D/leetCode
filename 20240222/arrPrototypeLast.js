Array.prototype.last = function () {
  return this.length > 0 ? this.pop() : -1;
};

const arr = [1, 2, 3, 4];
console.log(arr.last());
console.log(arr);
// 无敌， 这个BUG 留在被辞退前写，公司不得加薪请我回来
