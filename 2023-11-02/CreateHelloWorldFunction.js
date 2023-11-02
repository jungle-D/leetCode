// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

// Example 1:

// Input: args = []
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f(); // "Hello World"

// The function returned by createHelloWorld should always return "Hello World".
// Example 2:

// Input: args = [{},null,42]
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f({}, null, 42); // "Hello World"

// Any arguments could be passed to the function but it should still always return "Hello World".

/**
 * @return {Function}
 */
var createHelloWorld = function () {
  return function (...args) {
    console.log("Hello World");
  };
};

const f = createHelloWorld();
f(); // "Hello World"

// 此方法考验的是JS的闭包，更优秀的写法则是将createHelloWorld里返回的函数简写为箭头函数：
var createdAI = function () {
  return () => "Hello AI";
};

const a = createdAI();
a(); // Hello AI"
