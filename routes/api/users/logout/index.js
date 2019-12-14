const { Router } = require('express');
const router = Router();

router.post("/", (req, res) => {
  res.clearCookie("authToken")
    .status(200).json({
      status: 200,
      statusText: "OK"
    });
})

module.exports = router;