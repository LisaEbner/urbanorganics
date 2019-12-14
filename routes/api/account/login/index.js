const { Router } = require('express');
const router = Router();

const validator = require('validator');
const jwt = require('jsonwebtoken');

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw "Bad Request";

    const user = await req.app.get('db').User.findOne({ email });
    if (!user) throw "Unauthorized";
    const isMatch = await user.checkPassword(password);
    if (!isMatch) throw "Unauthorized";

    const payload = {
      id: user._id
    };
    const signConfig = {
      algorithm: "HS256",
      expiresIn: "48h"
    };
    const authToken = jwt.sign(payload, process.env.PRIVATE_AUTH_KEY, signConfig);

    const cookieConfig = {
      httpOnly: true,
      secure: (process.env.NODE_ENV === "production" ? true : false)
    };
    res.cookie("authToken", authToken, cookieConfig);

    res.status(200).json({
      status: 200,
      statusText: "OK"
    });
  } catch (e) {
    switch (e) {
      case "Unauthorized":
        res.status(401).json({
          status: 401,
          statusText: "Unauthorized"
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
  }
});

module.exports = router;