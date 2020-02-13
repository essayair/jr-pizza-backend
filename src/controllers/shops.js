const Shop = require("../models/Shop");
const Product = require("../models/Product");

async function addShop(req, res) {
  const { title, products, address, phone } = req.body;
  const shop = new Shop({ title, products, address, phone });

  await shop.save();
  return res.json(shop);
}
function getShop(req, res) {}
async function getAllShops(req, res) {
  const shops = await Shop.find();

  res.json(shops);
}
function updateShop(req, res) {}
function deleteShop(req, res) {}

function addProduct(req, res) {}
function deleteProduct(req, res) {}

module.exports = {
  addShop,
  getShop,
  getAllShops,
  updateShop,
  deleteShop,
  addProduct,
  deleteProduct
};
