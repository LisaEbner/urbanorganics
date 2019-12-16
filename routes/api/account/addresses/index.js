const { Router } = require('express');
const router = Router();

router.get("/", async (req, res) => {
  const { id } = req.authToken;
  const user = await req.app.get('db').User.findById(id);
  if (!user) {
    return res.status(204).json({
      status: 204,
      statusText: 'No Content'
    });
  }
  res.status(200).json({
    status: 200,
    statusText: 'OK',
    result: user.addresses
  });
});

router.put("/", async (req, res) => {
  const { id } = req.authToken;
  try {
    const { addresses } = req.body;
    if (!addresses || !Array.isArray(addresses)) throw "Bad Request";

    const user = await req.app.get('db').User.findById(id);
    if (!user) throw "Unprocessable Entity";

    user.addresses = addresses;

    const result = await user.save();

    res.status(200).json({
      status: 200,
      statusText: "OK",
      result: {
        addresses: result.addresses
      }
    });
  } catch (err) {
    switch (e) {
      case "Unprocessable Entity":
        res.status(422).json({
          status: 422,
          statusText: "Unprocessable Entity"
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