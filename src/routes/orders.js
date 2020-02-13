const express = require("express");

const router = express.Router();
const {
  addOrder,
  getOrder,
  getAllOrders,
  updateOrder,
  deleteOrder
} = require("../controllers/orders");

router.get("/:id", getOrder);
router.get("/", getAllOrders);
router.post("/", addOrder);
router.put("/:id", updateOrder);
router.put("/:id", deleteOrder);

module.exports = router;
