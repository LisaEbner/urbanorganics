const { Router } = require('express');
const router = Router();

const { verifyToken } = require('../../../middleware/auth');

router.use("/create", require("./create"));
router.use("/login", require("./login"));
router.use("/logout", verifyToken, require("./logout"));

module.exports = router;