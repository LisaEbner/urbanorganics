const { Router } = require('express');
const router = Router();

router.get("/", async (req, res) => {
  const { id } = req.authToken;
  try {
    const user = await req.app.get('db').User.findById(id);
    if (!user) throw "Not Found";
    res.status(200).json({
      status: 200,
      statusText: 'OK',
      result: user.addresses
    });
  } catch {
    res.status(404).json({
      status: 404,
      statusText: 'Not Found'
    });
  }
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