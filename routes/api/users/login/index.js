const { Router } = require('express');
const router = Router();

const validator = require('validator');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

function parseLogin({ email, password }) {
  if (typeof email !== "string" || typeof password !== "string") throw Error();
  if (!validator.isEmail(email)) throw Error();
  return {
    email,
    password
  };
}

router.post("/", (req, res) => {
  try {
    const { email, password } = parseLogin(req.body);
    req.app.get('db').User.findOne({ email })
      .then(user => {
        if (user === null) throw Error();

        bcrypt.compare(password, user.password)
          .then(isSame => {
            if (!isSame) throw Error();

            res.cookie(
              "authToken",
              jwt.sign(
                { id: user._id },
                process.env.PRIVATE_AUTH_KEY,
                {
                  algorithm: "HS256",
                  expiresIn: "48h"
                }
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
  }
  catch {
    res.status(400).json({
      status: 400,
      statusText: "Bad Request"
    });
  }
});

module.exports = router;