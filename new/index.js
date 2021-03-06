// 创建一个空的简单JavaScript对象（即{}）；
// 链接该对象（即设置该对象的构造函数）到另一个对象 ；
// 将步骤1新创建的对象作为this的上下文 ；
// 如果该函数没有返回对象，则返回this。

function new_object() {
  // 创建一个空的对象
  let obj = new Object()
  // 获得构造函数
  let Con = [].shift.call(arguments)
  // 链接到原型 （不推荐使用）
  obj.__proto__ = Con.prototype
  // 绑定 this，执行构造函数
  let result = Con.apply(obj, arguments)
  // 确保 new 出来的是个对象
  return typeof result === 'object' ? result : obj
}

// 优化版
function create() {
  // 1、获得构造函数，同时删除 arguments 中第一个参数
  let Con = [].shift.call(arguments);
  // 2、创建一个空的对象并链接到原型，obj 可以访问构造函数原型中的属性
  let obj = Object.create(Con.prototype);
  // 3、绑定 this 实现继承，obj 可以访问到构造函数中的属性
  let ret = Con.apply(obj, arguments);
  // 4、优先返回构造函数返回的对象
  return ret instanceof Object ? ret : obj;
}
