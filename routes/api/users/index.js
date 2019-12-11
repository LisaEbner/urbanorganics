const { Router } = require('express');
const router = Router();

router.use("/login", require("./login"));
router.use("/create", require("./create"));

module.exports = router;