/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
// var addTwoPromises = async function (promise1, promise2) {
//   let resultArr = await Promise.all([promise1, promise2]);
//   return resultArr[0] + resultArr[1];
// };

var addTwoPromises = async function (promise1, promise2) {
  let [p1, p2] = [await promise1.then(), await promise2.then()];

  return p1 + p2;
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4
