const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let result = [];

  if (!Array.isArray(arr)) throw new Error("\'arr\' parameter must be an instance of the Array!");
  
  if (arr.length === 0) return arr;
  
  for (let i = 0; i<arr.length; i++){
    if (arr[i] === undefined) {
      arr[i] = null;
    }
    switch (arr[i]) {
    case `--discard-next`:
        result.push(null);
        i++;
        break;
    case `--discard-prev`:
        if (result.length > 0) {
            result.pop();
        }
        break;
    case `--double-next`:
        if (arr.length-1 > i) {
            result.push(arr[i+1]);
        }
        break;
    case `--double-prev`:
        if (result.length > 0) {
            result.push(result[result.length-1]);
        }
        break;
    default:
        result.push(arr[i]);
        break;
    }
  }
  result = result.filter( (e) => e !== null);
  return result;
  // remove line with error and write your code here
}

module.exports = {
  transform
};
