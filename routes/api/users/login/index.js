const { Router } = require('express');
const router = Router();

const validator = require('validator');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

function parseLogin(data) {
  return new Promise((resolve, reject) => {
    if (!data) reject("no data to parse");
    const { email, password } = data;

    let typeError = "";
    if (typeof email !== "string") typeError += "email is not a string";
    if (typeof password !== "string") typeError += `${typeError ? "AND " : ""}password is not a string`;
    if (typeError) reject(typeError);

    if (!validator.isEmail(email)) resolve();
    resolve({ email, password });
  })
}

router.post("/", (req, res) => {
  parseLogin(req.body)
    .then(loginData => {
      if (!loginData) throw "Unprocessable Entity";
      else return loginData;
    })
    .then(async ({ email, password }) => {
      const user = await req.app.get('db').User.findOne({ email });
      if (!user) throw "Unauthorized";
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) throw "Unauthorized";

      const signConfig = {
        algorithm: "HS256",
        expiresIn: "48h"
      };
      const cookieConfig = {
        httpOnly: true,
        secure: (process.env.NODE_ENV === "production" ? true : false)
      };
      res.cookie(
        "authToken",
        jwt.sign(
          {
            id: user._id
          },
          process.env.PRIVATE_AUTH_KEY,
          signConfig
        ),
        cookieConfig
      );
      res.status(200).json({
        status: 200,
        statusText: "OK"
      });
    })
    .catch(err => {
      switch (err) {
        case "Unauthorized":
          res.status(400).json({
            status: 401,
            statusText: "Unauthorized"
          });
          break;
        case "Unprocessable Entity":
          res.status(422).json({
            status: 422,
            statusText: "Unprocessable Entity"
          });
          break;
        case "Bad Request":
        default:
          console.log(err);
          return res.status(400).json({
            status: 400,
            statusText: "Bad Request"
          });
          break;
      }
    });
});

module.exports = router;