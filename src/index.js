module.exports = function check(str, bracketsConfig) {
  const pairs = {};
  const open = [];
  bracketsConfig.forEach((item) => (pairs[item.at(0)] = item.at(1)));
  for (let sym of str.split("")){
    if (Object.keys(pairs).includes(sym)) {
      if (pairs[sym] === sym && open[open.length - 1] === sym) {
        open.pop()
      } else {
        open.push(sym);
      }
    } else if (Object.values(pairs).includes(sym)) {
      if (open.length === 0 || pairs[open.pop()] !== sym) {
        return false
      }
    }
  }
  return open.length === 0;
};
