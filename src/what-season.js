const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if ( !date ) return ('Unable to determine the time of year!');
 
  if (date.hasOwnProperty("getMonth")) throw new Error('Invalid date!');
  if (Object.getOwnPropertyNames(date).length > 0) throw new Error('Invalid date!');
  if (typeof(date)==='number') throw new Error('Invalid date!');
  let month = date.getMonth();
  if ( isNaN(month) ) throw new Error('Invalid date!');
  
  let season;
  
  switch (month) {
    case 0:
    case 1:
    case 11:
      season = 'winter';
      //return season;
      break;
    case 2:
    case 3:
    case 4:
      season = 'spring';
      //return season;
      break;
    case 5:
    case 6:
    case 7:
      season = 'summer';
      //return season;
      break;
    case 8:
    case 9:
    case 10:
      season = 'autumn';
      //return season;
      break;
  }

  return season;
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
