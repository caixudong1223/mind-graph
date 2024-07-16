// 请写一个函数，输出出多级嵌套结构的 Object 的所有 key 值
// ```js
// var obj = {
//   a: "12",
//   b: "23",
//   first: {
//     c: "34",
//     d: "45",
//     second: { 3: "56", f: "67", three: { g: "78", h: "89", i: "90" } },
//   },
// };
// // => [a,b,c,d,e,f,g,h,i]
// ```;

function getKeys(obj) {
  let arr = [];
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      arr.push(key);
      arr = arr.concat(getKeys(obj[key]));
    } else {
      arr.push(key);
    }
  }
  return arr;
}

function getObjectKeys(obj) {
  let arr = [];
  for (const key in obj) {
    arr.push(key);
    if (typeof obj[key] === "object") {
      arr = arr.concat(getObjectKeys(obj[key]));
    }
  }

  return arr;
}
var obj = {
  a: "12",
  b: "23",
  first: {
    c: "34",
    d: "45",
    second: { 3: "56", f: "67", three: { g: "78", h: "89", i: "90" } },
  },
  func: () => {},
};
// console.log(getObjectKeys(obj).join(","));

// ### 动手实现一个 repeat 方法

```js
function repeat(func, times, wait) {
  // TODO
}
const repeatFunc = repeat(alert, 4, 3000);
// 调用这个 repeatFunc ("hellworld")，会alert4次 helloworld, 每次间隔3秒
```;

function repeatExecute(func, times, wait) {
  let i = 0;
  let timer = setInterval(() => {
    func();
    i++;
    if (i === times) {
      clearInterval(timer);
    }
  }, wait);
}
