const { Router } = require('express');
const router = Router();

const bcrypt = require('bcrypt');

function getUser(body) {
  const { name, email, password } = body;
  if (!name || typeof email !== "string" || typeof password !== "string") return;
  const { first, last } = name;
  if (typeof first !== "string" || typeof last !== "string") return;
  return {
    name: { first, last },
    email,
    password
  };
}

router.post("/", (req, res) => {
  const user = getUser(req.body);

  if (!user) {
    return res.status(400).json({
      status: 400,
      statusText: "Bad Request"
    });
  }

  const { name, email, password } = user;

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

              res.status(200).json({
                status: 200,
                statusText: "OK"
              })
            });
        });
    });
})

module.exports = router;