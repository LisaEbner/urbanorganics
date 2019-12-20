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
      result: user.cart
    });
  } catch {
    res.status(404).json({
      status: 404,
      statusText: 'Not Found'
    });
  }
});

router.put("/", async (req, res) => {
  const db = req.app.get('db');
  const { id } = req.authToken;
  try {
    const user = await db.User.findById(id);
    if (!user) throw "Not Found";

    await user.addToCart(req.body);

    const result = await user.save();

    res.status(200).json({
      status: 200,
      statusText: "OK",
      result: {
        cart: result.cart
      }
    });
  } catch (err) {
    switch (err) {
      case "Not Found":
        res.status(404).json({
          status: 404,
          statusText: "Not Found"
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