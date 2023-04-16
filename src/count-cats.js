const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
//const matrix =[ [0, 1, '^^'],  [0, '^^', 2],  ['^^', 1, 2] ];
function countCats(matrix) {
  // remove line with error and write your code here
  let Number = 0;
  for (let i = 0; i < (matrix.length); i+= 1 ) {
    //let backyardArray = backyard[i]
    for (let a = 0; a < (matrix[i].length); a+= 1 ) {
      if (matrix[i][a] == '^^') {
       Number++;
      }
    }
  }
  return Number;
}

module.exports = {
  countCats
};
