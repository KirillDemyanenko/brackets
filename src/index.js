module.exports = function check(str, bracketsConfig) {
  const pairs = {};
  const open = [];
  let isValid = true;
  bracketsConfig.forEach((item) => (pairs[item.at(0)] = item.at(1)));
  str.split("").forEach((sym) => {
    if (Object.keys(pairs).includes(sym)) {
      open.push(sym);
    } else if (Object.values(pairs).includes(sym)) {
      if (open.length === 0 || pairs[open.pop()] !== sym) {
        isValid = false;
      }
    }
  });
  return isValid && open.length === 0;
};
