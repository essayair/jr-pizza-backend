const express = require("express");
const router = express.Router();

const orderRoute = require("./routes/orders.js");
const shopRoute = require("./routes/shops");

router.use("/orders", orderRoute);
router.use("/shops", shopRoute);

module.exports = router;
