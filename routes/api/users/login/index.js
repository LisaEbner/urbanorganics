const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const { Router } = require('express');
const router = Router();

// Settings for JWT signing
const SIGNING_CONFIG = {
  algorithm: "HS256",
  expiresIn: "48h"
}

router.post("/", (req, res) => {
  const { email, password } = req.body;
  // If email
  if (typeof email !== "string" || typeof password !== "string") {
    return res.status(400).json({
      status: 400,
      statusText: "Bad Request"
    });
  }

  req.app.get('db').User.findOne({ email })
    .then(user => {
      if (user === null) throw Error();

      bcrypt.compare(password, user.password)
        .then(response => {
          if (!response) throw Error();

          res.cookie(
            "authToken",
            jwt.sign(
              { email },
              process.env.PRIVATE_AUTH_KEY,
              SIGNING_CONFIG
            ),
            {
              httpOnly: true,
              //secure: true
            }
          );
          res.status(200).json({
            status: 200,
            statusText: "OK"
          });
        });
    })
    .catch(err => {
      return res.status(400).json({
        status: 401,
        statusText: "Unauthorized"
      });
    });
});

module.exports = router;