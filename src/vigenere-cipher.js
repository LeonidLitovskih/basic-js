const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(lineCrypt=true) {
    this.lineCrypt = lineCrypt;
  }
  encrypt(message, key) {
    if ( !message || !key) throw new Error('Incorrect arguments!');

    let strCrypto = "";
    let i_key = 0;

    for (let i=0; i<message.length; i++) {
      const char = message[i].toUpperCase();
      if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
        const charKey = key[i_key].toUpperCase();
        let charCode = (char.charCodeAt(0)-65) + (charKey.charCodeAt(0)-65);
        if (charCode > 25 ) {
          charCode = charCode - 26;
        }
        strCrypto = strCrypto + String.fromCharCode(charCode + 65);
        i_key++;
        if (i_key > key.length-1) {
          i_key = 0;
        }
      } else {
        strCrypto = strCrypto + message[i];
      }
    }
    return ( this.lineCrypt ? strCrypto : strCrypto.split('').reverse().join('') );
  }
  decrypt(message, key) {
    if ( !message || !key) throw new Error('Incorrect arguments!');

    let strDeCrypto = "";
    let i_key = 0;

    for (let i=0; i<message.length; i++) {
      const charCrypto = message[i].toUpperCase();
      if (charCrypto.charCodeAt(0) >= 65 && charCrypto.charCodeAt(0) <= 90) {
        const charKey = key[i_key].toUpperCase();
        let charCode = (charCrypto.charCodeAt(0)-65) - (charKey.charCodeAt(0)-65);
        if ( charCode < 0 ) {
          charCode = 26 + charCode;
        }
        strDeCrypto = strDeCrypto + String.fromCharCode(charCode + 65);
        i_key++;
        if (i_key > key.length-1) {
          i_key = 0;
        }
      } else {
        strDeCrypto = strDeCrypto + message[i];
      }
    }
    return ( this.lineCrypt ? strDeCrypto : strDeCrypto.split('').reverse().join('') );
  }
}

module.exports = {
  VigenereCipheringMachine
};
