const bcrypt = require('bcrypt');
const saltRounds = parseInt(process.env.CRYPT_SALTROUNDS);
const txtPrefix = process.env.CRYPT_PREFIX;

module.exports = {
  hashStrSync: async (pureTxt) => {
    return await bcrypt.hash(`${txtPrefix}${pureTxt}`, saltRounds);
  },
  compareStrSync: async (pureTxt, hashingTxt) => {
    return await bcrypt.compare(`${txtPrefix}${pureTxt}`, hashingTxt);
  }
};