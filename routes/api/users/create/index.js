const { Router } = require('express');
const router = Router();

const validator = require('validator');
const bcrypt = require('bcrypt');

const strongPassword = new RegExp(/^(?!.*\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#%&+=|^$*-]).{8,}/g);

function parseUser({ email, password, name }) {
  if (typeof email !== "string" || typeof password !== "string") throw Error(400);

  if (typeof name !== "object" || Array.isArray(name)) throw Error(400);
  const { first, last } = name;
  if (typeof first !== "string" || typeof last !== "string") throw Error(400);

  if (!validator.isEmail(email) || !password.match(strongPassword)) throw Error(422);

  if (first.length < 1 || last.length < 1) throw Error(422);

  return {
    email,
    password,
    name: { first, last }
  };
}

router.post("/", (req, res) => {
  try {
    const { email, password, name } = parseUser(req.body);
    const db = req.app.get('db');

    db.User.findOne({ email })
      .then(user => {
        if (user) {
          return res.status(422).json({
            status: 422,
            statusText: "Unprocessable Entity"
          });
        }
        const saltRounds = 10;
        bcrypt.hash(password, saltRounds)
          .then(hash => {
            db.User.create(
              {
                name,
                email,
                password: hash
              }
            )
              .then(result => {
                console.log(result);

                res.status(201).json({
                  status: 201,
                  statusText: "Created"
                })
              });
          });
      });
  } catch (err) {
    switch (err.message) {
      case "422":
        res.status(422).json({
          status: 422,
          statusText: "Unprocessable Entity"
        });
        break;
      case "400":
      default:
        res.status(400).json({
          status: 400,
          statusText: "Bad Request"
        });
        break;
    }
  }
})

module.exports = router;