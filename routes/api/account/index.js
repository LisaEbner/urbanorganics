const { Router } = require('express');
const router = Router();

const { verifyToken } = require("../../../middleware/auth");

router.use("/login", require("./login"));
router.use("/logout", verifyToken, require("./logout"));

router.use("/create", require("./create"));

router.use("/addresses", verifyToken, require("./addresses"));

router.use("/cart", verifyToken, require("./cart"));

router.get("/", verifyToken, (req, res) => {
  const { id } = req.authToken;
  req.app.get('db').User.findById(id)
    .then((user) => {
      console.log(user.fullName);
      res.status(200).json({
        status: 200,
        statusText: 'OK'
      })
    })
})


module.exports = router;