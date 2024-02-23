// 笔试题(最多给一个小时)
//     1. 假设一个非空数组，找出出现次数最多的数字
//         如: [4, 12, 8, 99, 4, 16, 35, 8, 8, 12, 17, 12]
function mostFrequentItemOrItems(arr) {
  let count = {};
  let maxCount = 0;
  let maxItems = [];

  for (let item of arr) {
    count[item] = (count[item] || 0) + 1;

    if (count[item] > maxCount) {
      maxCount = count[item];
      maxItems = [item];
    } else if (count[item] === maxCount) maxItems.push(item);
  }

  return maxItems;
}

const _arr = [4, 12, 8, 99, 4, 16, 35, 8, 8, 12, 17, 12];
console.log(mostFrequentItemOrItems(_arr));

//     2. 请写出以下代码的输出；并文字说明理由
setTimeout(function () {
  console.log(1);
}, 0);
new Promise(function (resolve) {
  console.log(2);
  for (var i = 0; i < 10000; i++) {
    i == 9999 && resolve();
  }
  console.log(3);
}).then(function () {
  console.log(4);
});
console.log(5);
// 答案：2、3、5、4、1；解释：先执行同步代码，再执行异步代码，new Promise里的代码为同步代码，只有当promise状态返回的时候才是异步，而异步代码又分宏任务和微任务，在执行宏任务之前都会将队列中的微任务全部执行完毕，所以先走promise状态返回后的异步输出，再返回SetTimeout里的输出

//     3. js实现两个大数相加，比如：9027199254740992+1234567893993492999
const _testNum = 1234567893993492999;
console.log(testNum);
const _num1 = BigInt("9027199254740992"); // 先从 number 型转为 string 型，再转换到 BigInt 就不会精度丢失了，number 型根本展示不出1234567893993492999
const _num2 = BigInt("1234567893993492999");
function addTwoBigInt(bigNum1, bigNUm2) {
  return String(BigInt(bigNum1) + BigInt(bigNUm2));
}
console.log(addTwoBigInt(_num1, _num2));

//     4. 请提供一个函数，将下面的数组转为树形结构
//       注意：a. arr可能有100,甚至200个元素；b. arr中的元素没有顺序性。
const arr = [
  {
    id: 1,
    name: "x1",
  },
  {
    id: 2,
    name: "x2",
  },
  {
    id: 3,
    name: "x3",
    parentId: 2,
  },
  {
    id: 4,
    name: "x4",
    parentId: 2,
  },
];

function arrayToTree(arr) {
  let map = {};
  let tree = [];

  for (let i = 0; i < arr.length; i++) {
    map[arr[i].id] = i; // 初始化映射表
    arr[i].children = []; // 初始化子节点
  }

  for (let i = 0; i < arr.length; i++) {
    let node = arr[i];
    if (node.parentId !== undefined) {
      // 如果存在父节点，添加到父节点的 children 中
      arr[map[node.parentId]].children.push(node);
    } else {
      // 如果不存在父节点，说明是根节点，直接添加到 tree 中
      tree.push(node);
    }
  }

  return tree;
}

console.log(arrayToTree(arr));
