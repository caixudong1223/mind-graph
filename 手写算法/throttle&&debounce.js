// 防抖 防抖是指事件被触发后，n秒内函数只能执行一次，如果在这n秒内又被触发，则重新计算执行时间
function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

//节流是指连续触发事件，但在n秒内只执行一次函数
function throttle(func, limit) {
  let inThrottle;
  return function name(params) {
    const context = this;
    const args = arguments;

    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => {
        return (inThrottle = false);
      }, limit);
    }
  };
}
