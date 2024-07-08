// typeof方式
// console.log(typeof []);
// console.log(typeof {});
// console.log(typeof null);
// console.log(typeof function () {});

// instanceof
// console.log(2 instanceof Number);
// console.log([] instanceof Array);
// console.log({} instanceof Object);
// console.log(function () {} instanceof Function);

// constructor
// console.log((2).constructor === Number);

// Object.prototype.toString.call()

// const object = {
//   name: "cxd",
//   age: 12,
//   title: "前端工程师",
// };
// for (const key in object) {
//   //   if (Object.hasOwnProperty.call(object, key)) {
//   const element = object[key];
//   console.log(element);
//   //   }
// }

// for (const iterator of object) {
//   console.log(iterator);
// }

let s = Symbol();
const a = {
  [s]: function (params) {
    console.log(params);
  },
};

console.log(a[s]);
console.log(a.s);
a[s]("text");
