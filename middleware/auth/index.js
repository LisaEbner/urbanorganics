const jwt = require('jsonwebtoken');

module.exports = {
  verifyToken: (req, res, next) => {
    const { cookies } = req;

    if (!cookies || !cookies.authToken) {
      return res.status(400).json({
        status: 400,
        statusText: "Bad Request"
      });
    }

    jwt.verify(
      cookies.authToken,
      process.env.PRIVATE_AUTH_KEY,
      (err, decoded) => {
        if (err) {
          return res.status(401).json({
            status: 401,
            statusText: "Unauthorized"
          });
        }
        req.authToken = decoded;
        next();
      });
  }
}