const { Router } = require('express');
const router = Router();

const bcrypt = require('bcrypt');


router.post("/", (req, res) => {
  const db = req.app.get('db');
  db.User.parse(req.body)
    .then(userData => {
      if (!userData) throw "Unprocessable Entity";
      else return userData;
    })
    .then(async ({ email, password, name }) => {
      const existingUser = await db.User.findOne({ email });
      if (existingUser) throw "Unprocessable Entity";

      const saltRounds = 10;
      const hash = await bcrypt.hash(password, saltRounds);
      const newUser = await db.User.create({
        name,
        email,
        password: hash
      });

      console.log(newUser);

      res.status(201).json({
        status: 201,
        statusText: "Created"
      })
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