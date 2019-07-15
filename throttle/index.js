function throttle(func, wait) {
  let timer = null;
  // 判断是否为第一次执行
  let firstExcuted = false;
  // 保存最后一次调用传入的参数
  let laterArgs = [];
  return function(...args) {
      // 1. 立即执行
      laterArgs = args;
    if (!firstExcuted) {
        // 2.绑定 this，支持参数传递
      func.apply(this, laterArgs);
      firstExcuted = true;
    } else {
      if (timer) {
        return;
      }
      timer = setTimeout(() => {
        func.apply(this, laterArgs);
        clearTimeout(timer);
        timer = null;
      }, wait);
    }
  };
}

module.exports = throttle;
