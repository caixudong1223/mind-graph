//worker.js  worker 线程
// 程序处理完毕后返回一个结果给主线程。//0 可以加载其他js进来，比如ajax.
//importScripts('ajax.js','b.js')

//1.监听主线程
onmessage = function (e) {
  console.log("Worker: Message received from main script");

  // 接收来自主线程发送过来的数据;
  let num = e.data;
  //使用for循环模拟一个耗时、耗性能的任务。（如果这个for循环放在主线程，那么页面很可能会卡死，
  //影响用户体验）。
  for(let i = 0;i<=num;i++){
    if (i == num) {
      //2.向主线程发送数据
      postMessage("任务完成啦！");
    }
  }
};
//3.worker 线程也可以调用close 方法来结束worker线程。
// close()

//4.同样的，在worker 线程中也可以监听错误信息。
onerror = function (err) {
  console.log(err);
};
