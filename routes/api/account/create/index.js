const { Router } = require('express');
const router = Router();


router.post("/", async (req, res) => {
  const db = req.app.get('db');
  try {
    req.body.cart = [{ count: 1 }, { count: 0 }, { count: -1 }];
    const { email } = req.body;
    if (!email) throw "Bad Request";

    const existingUser = await db.User.findOne({ email });
    if (existingUser) throw "Unprocessable Entity";

    const newUser = await db.User.create(req.body);

    res.status(201).json({
      status: 201,
      statusText: "Created"
    });
  } catch (e) {
    res.status(400).json({
      status: 400,
      statusText: "Bad Request"
    });
  }
})

module.exports = router;