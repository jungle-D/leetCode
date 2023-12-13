/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  let resultArr = await Promise.all([promise1, promise2]);
  return resultArr[0] + resultArr[1];
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4
