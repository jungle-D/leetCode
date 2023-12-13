/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    let functionsLength = functions.length;
    let result = x;
    for (let i = functionsLength - 1; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;
  };
};

const fn = compose([]);
fn(4); // 9
console.log(fn(42));
