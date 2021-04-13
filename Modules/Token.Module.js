const jwt = require('jsonwebtoken');

module.exports = {
  generateToken: async (user) => {
    const secretKey = process.env.TOKEN_SECRETKEY;
  
    const token = await jwt.sign({user}, secretKey, { expiresIn: '1 days' }); 

    return token;
  }
}