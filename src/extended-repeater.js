const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeater = "";
  let addStr = "";
  
  str = String(str);

  const rT = "repeatTimes" in options ? options.repeatTimes : (str === '' ? 0 : 1);
  const separator = "separator" in options ? options.separator : '+';
  const addition = "addition" in options ? String(options.addition) : '';
  const addRT = "additionRepeatTimes" in options ? options.additionRepeatTimes : (addition === '' ? 0 : 1);
  const addS = "additionSeparator" in options ? options.additionSeparator : '|';

  //let text = (((str+(((options.addition + options.additionSeparator) * (options.additionRepeatTimes - 1)) + options.addition) + options.separator) * (options.repeatTimes-1)) + ((str+(((options.addition + options.additionSeparator) * (options.additionRepeatTimes - 1)) + options.addition) + options.separator))) 
  for (let i=1;i<=rT;i++) {
    addStr = "";
    for (let j=1;j<=addRT;j++) {
      addStr = addStr.concat((addStr !== "" ? addS : ""), addition);
    }    
    repeater = repeater.concat((repeater !== "" ? separator : ""), str, addStr);
  }
  return (repeater);

  // remove line with error and write your code here
}

module.exports = {
  repeater
};
