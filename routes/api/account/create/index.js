const { Router } = require('express');
const router = Router();

const bcrypt = require('bcrypt');


router.post("/", async (req, res) => {
  const db = req.app.get('db');
  try {
    const { email } = req.body;
    if (!email) throw "Bad Request";

    const existingUser = await db.User.findOne({ email });
    if (existingUser) throw "Unprocessable Entity";

    const newUser = new db.User(req.body);
    console.log(newUser);
    const result = await newUser.save();
    console.log(result);

    res.status(201).json({
      status: 201,
      statusText: "Created"
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({
      status: 400,
      statusText: "Bad Request"
    });
  }
})

module.exports = router;