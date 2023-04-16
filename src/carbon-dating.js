const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const reg = new RegExp('^-?\\d+\\.?\\d*$');
  if (typeof sampleActivity !== "string" || !(reg.test(sampleActivity)) ) { return (false)};
  const nActivity = parseFloat(sampleActivity);
  if (nActivity <= 0 || nActivity > 15) {return (false)};
  return ( Math.ceil( Math.log(MODERN_ACTIVITY / nActivity) / (Math.log(2) / HALF_LIFE_PERIOD) ) );
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};
