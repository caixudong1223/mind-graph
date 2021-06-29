// instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。

function myInstanceOf(left, right) {
  // 1.获取对象的原型
  let proto = Object.getPrototypeOf(left); //是个对象
  // 2.获取构造函数的prototype对象
  let prototype = right.prototype;

  // 3.判断构造函数的 prototype 对象是否在对象的原型链上
  while (true) {
    if (!proto) return false;
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}
