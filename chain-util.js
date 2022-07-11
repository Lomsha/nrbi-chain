const EC = require('elliptic').ec;
const uuidV1 = require('uuid');
const ec = new EC('secp256k1');

class ChainUtil {
    static genKeyPair() {
        return ec.genKeyPair();
   }
   static id() {
    return uuidV1.v1();
  }
}

module.exports = ChainUtil;