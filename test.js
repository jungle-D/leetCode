for (let i = 0; i < 10; i++) {
  let arr = {};
  arr[i] ||= [];
  arr[i].push(i);
  console.log(arr);
}
