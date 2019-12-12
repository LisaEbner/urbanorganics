const { Router } = require('express');
const router = Router();

const bcrypt = require('bcrypt');

router.post("/", (req, res) => {
  const db = req.app.get('db');
  db.User.parse(req.body)
    .then(userData => {
      if (!userData) throw "Unprocessable Entity";
      return userData
    })
    .then(({ email, password, name }) => {
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
    })
    .catch(err => {
      switch (err) {
        case "Unprocessable Entity":
          return res.status(422).json({
            status: 422,
            statusText: "Unprocessable Entity"
          });
        case "Bad Request":
        default:
          return res.status(400).json({
            status: 400,
            statusText: "Bad Request"
          });
      }
    });
})

module.exports = router;