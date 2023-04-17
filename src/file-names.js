const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(/* names */) {
  if (names.length === 0) return names;
  let oCounter = {};
  names = names.map(function(item) {
    let itemName = item;
    if (item in oCounter) {
      itemName = item+"("+oCounter[item]+")";
      oCounter[item] += 1;
      if (!(itemName in oCounter)) {
        oCounter[itemName] = 1;
      }
    } else {
      oCounter[item] = 1;
    }
    return itemName;
  });
  return names;
  // remove line with error and write your code here
}

module.exports = {
  renameFiles
};
