// 给定一个整型参数 n，请你编写并返回一个 counter 函数。这个 counter 函数最初返回 n，每次调用它时会返回前一个值加 1 的值 ( n ,  n + 1 ,  n + 2 ，等等)。

// 示例 1：

// 输入：
// n = 10
// ["call","call","call"]
// 输出：[10,11,12]
// 解释：
// counter() = 10 // 第一次调用 counter()，返回 n。
// counter() = 11 // 返回上次调用的值加 1。
// counter() = 12 // 返回上次调用的值加 1。
// 示例 2：

// 输入：
// n = -2
// ["call","call","call","call","call"]
// 输出：[-2,-1,0,1,2]
// 解释：counter() 最初返回 -2。然后在每个后续调用后增加 1。

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  return () => console.log(n++);
};

const counter = createCounter(10);
counter(); // 10
counter(); // 11
counter(); // 12

// JS 闭包，当内层函数引用了外层变量时，外层函数就算运行完成，其变量也不会被销毁，而是初始化后一直存在
function fn() {
  //全局上下文
  //外层函数
  let num = 0; //外层活动对象
  return function () {
    //内层函数
    let n = 0; //内层活动对象
    console.log("num:", ++num, "n", ++n); //引用了外层活动对象，因此外层的活动对象num不会被销毁
  };
}

let result = fn(); //全局变量对象,此处执行一次fn()，num被初始化，并将返回的匿名函数传给result
result(); //=>num:1,n:1
result(); //=>num:2,n:1
result(); //=>num:3,n:1

/**
 * 在let result = fn() 这时，外层函数的作用域链已经被销毁，但是因为活动对象num被匿名函数引用了，所以它没有被销毁，而是初始化后一直存在，当result()执行的时候，在其执行上下文创建 内部活动对象：n = 0，外部活动对象：num = 0，还有全局变量对象result；

第一次执行，将num和n进行++处理，处理结束后匿名函数并没有被销毁，因为匿名函数仍然被result变量引用。=>num:1,n:1

第二次执行，再次在执行上下文中创建全新的对应作用域的对象，内部的n会重新赋值，但是没有给外部的num重新赋值的代码，因此num = 1,然后执行++，结果为=> num:2,n:1

第三次执行同样，num因为没有初始化也没有被销毁，继续保留上一次执行后的值，结果为 num:3,n:1

这样就容易导致出现内存泄露，因为num无法被删除，想要释放内存，我们需要
 */
