const { Router } = require('express');
const router = Router();

const { verifyToken } = require("../../middleware/auth");

router.use("/users", require("./users"));

module.exports = router;