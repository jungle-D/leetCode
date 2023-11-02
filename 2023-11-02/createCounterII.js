/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let num = init;
  return (obj = {
    increment: function () {
      console.log(++num);
    },
    reset: function () {
      num = init;
      console.log(num);
    },
    decrement: function () {
      console.log(--num);
    },
  });
};

let counter = createCounter(5);
counter.increment(); // 6
counter.increment(); // 7
counter.reset(); // 5
counter.decrement(); // 6
counter = null;
