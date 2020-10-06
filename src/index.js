module.exports = function check(str, bracketsConfig) {
  str = str.split('');
  for (var i = 0; i < str.length; i++) {
    for (var [curr, next] of bracketsConfig) {
      if (curr === str[i] && next === str[i+1]) {
        str.splice(i, 2);
        i -= 2;
      }
    }
  }
  return (str.length === 0);
}
