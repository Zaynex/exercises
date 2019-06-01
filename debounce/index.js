function debounce(func, wait) {
  let timer = null;
  return function(...args) {
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
      timer = null;
    }, wait)
  }
}

module.exports = debounce;