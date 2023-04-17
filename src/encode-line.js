const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(/* str */) {
  let arr = [];
  str.split('').forEach(e => {
    (arr.length === 0 || arr[arr.length-1][0] !== e) ? arr.push([e,1]) : arr[arr.length-1][1] += 1;
  });
  let encodeLine = '';
  for (let i=0; i < arr.length; i++) {
    encodeLine += (arr[i][1] > 1 ? arr[i][1] : '') + arr[i][0];
  }
  return encodeLine;
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
