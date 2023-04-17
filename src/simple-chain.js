const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
    if (!position || typeof position !== 'number' || position < 0 || position > this.chain.length) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    };
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    this.chainStr = this.chain.join("~~");
    this.chain = [];
    return this.chainStr;
  }
};

module.exports = {
  chainMaker
};
