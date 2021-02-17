const SalesCtrl = {};

const Sale = require("../models/sales");
const User = require("../models/users");
SalesCtrl.getSale = async (req, res) => {
  const sale = await Sale.findById(req.params.id);
  res.send(sale);
};
SalesCtrl.getSales = async (req, res) => {
  const Sales = await Sale.find();
  res.json(Sales);
};
SalesCtrl.updateSale = async (req, res) => {
  await Sale.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Venta actualizada" });
};
SalesCtrl.createSale = async (req, res) => {
  const newSale = new Sale(req.body);
  await newSale.save();
  res.json({ message: "Venta Creada" });
};
SalesCtrl.deleteSale = async (req, res) => {
  await Sale.findByIdAndDelete(req.params.id, req.body);
  res.json({ message: "Venta Eliminada" });
};
SalesCtrl.get = async (req, res) => {
  Sale.find({}, function (err, sales) {
    User.populate(sales, { path: "fk_user" }, function (err, sales) {
      res.status(200).send(sales);
    });
  });
};
module.exports = SalesCtrl;
