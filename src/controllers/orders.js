const Order = require("../models/Order");

async function addOrder(req, res) {
  const { name, time, description } = req.body;
  const order = new Order({ name, time, description });

  await order.save();
  return res.json(order);
}
function getOrder(req, res) {}
async function getAllOrders(req, res) {
  const orders = await Order.find();

  res.json(orders);
}
function updateOrder(req, res) {}
function deleteOrder(req, res) {}

module.exports = {
  addOrder,
  getOrder,
  getAllOrders,
  updateOrder,
  deleteOrder
};
