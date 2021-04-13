const jwt = require('jsonwebtoken');

module.exports = {
  generateToken: async (user) => {
    const secretKey = process.env.TOKEN_SECRETKEY;
  
    const token = await jwt.sign({user}, secretKey, { expiresIn: '2 days' }); 

    return token;
  },
  verifyToken: async (req, res, next) => {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
      // Split at the space
      const bearer = bearerHeader.split(' ');
      // Get token from array
      const bearerToken = bearer[1];

      // Verify bearer token
      jwt.verify(bearerToken, process.env.TOKEN_SECRETKEY, function(err, decoded) {
        if (err) {
          if (err.name === 'TokenExpiredError') {
            res.status(498).json({
              message: 'Token has expired.'
            });
          } else {
            res.status(403).json({
              message: 'Access denied'
            });
          }          
        } else {
          // Next middleware
          next();
        }
      });      
    } else {
      // Forbidden
      res.sendStatus(403);
    }
  }
}