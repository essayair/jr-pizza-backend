const express = require("express");

const router = express.Router();
const {
  addShop,
  getShop,
  getAllShops,
  updateShop,
  deleteShop,
  addProduct,
  deleteProduct
} = require("../controllers/shops");

router.get("/:id", getShop);
router.get("/", getAllShops);
router.post("/", addShop);
router.put("/:id", updateShop);
router.put("/:id", deleteShop);
router.post("/:id/products/:code", addProduct);
router.delete("/:id/products/:code", deleteProduct);

module.exports = router;
