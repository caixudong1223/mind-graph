// Proxy
// var proxy = new Proxy(target, handler);

// const obj = {
//   name: "caixudong",
//   age: 12,
// };

// // 支持的拦截操作, 13种
// const newObj = new Proxy(obj, {
//   get(target, propKey, receiver) {
//     if (propKey in target) {
//       return `property: ${target[propKey]}`;
//     } else {
//       throw new ReferenceError('Prop name "' + propKey + '" does not exist.');
//     }
//   },
//   set: function (target, propKey, newValue, receiver) {},
//   has: function (target, propKey) {},
//   deleteProperty: function (target, propKey) {},
//   apply: function (target, object, args) {}, // 拦截 Proxy 实例作为函数调用的操作
//   construct: function (target, args) {}, // 拦截 Proxy 实例作为构造函数调用的操作
// });

// const obj2 = Object.create(newObj);

// console.log(newObj.name);
// console.log(obj2.name);

// const target = Object.defineProperties(
//   {},
//   {
//     foo: {
//       value: 123,
//       configurable: false,
//       writable: false,
//     },
//   }
// );

// const handler = {
//   get(target, propKey) {
//     return "abc";
//   },
// };

// const newProxy = new Proxy(target, handler);

// newProxy.foo;

// var target = function (params) {
//   return "target";
// };

// var handler = {
//   apply() {
//     return "proxy";
//   },
// };

// var p = new Proxy(target, handler);

// console.log(p()); // proxy实例作为函数的调用，会被apply方法拦截

// function sum(left, right) {
//   return left + right;
// }

// var proxySum = new Proxy(sum, {
//   apply(target, object, args) {
//     console.log(...args);
//     console.log(Reflect);
//     return Reflect.apply(...arguments) * 2;
//   },
// });

// console.log(proxySum(1, 2));
// let p = {
//   a: "a",
// };

// let handler = {
//   set(target, key, value, receiver) {
//     console.log("set " + key);
//     // 不传入receiver则不会触发defineProperty
//     Reflect.set(target, key, value, receiver);
//   },
//   defineProperty(target, key, attribute) {
//     console.log("defineProperty " + key);
//     Reflect.defineProperty(target, key, attribute);
//   },
// };

// let obj = new Proxy(p, handler);

// obj.a = "test";

// function Greeting(name) {
//   this.name = name;
// }

// const instance1 = new Greeting("张三");
// const instance2 = Reflect.construct(Greeting, ["李四"]); // 第一个参数是函数

// console.log(instance1);
// console.log(instance2);

const queuedObservers = new Set();

const observe = (fn) => queuedObservers.add(fn);

function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver);
  queuedObservers.forEach((observer) => observer());
  return result;
}

const observable = (obj) => new Proxy(obj, { set });

const person = observable({
  name: "张三",
  age: 20,
});

function print() {
  console.log(`${person.name}, ${person.age}`);
}

observe(print);
person.name = "李四";
