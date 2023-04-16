const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if ( !Array.isArray(members) || members.length === 0 ) return false;
  return (members.filter(e => typeof (e) === "string").map(e => e.trim().substring(0,1).toUpperCase()).sort().join('') );
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
