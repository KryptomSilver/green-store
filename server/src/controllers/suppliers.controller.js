const SuppliersCtrl = {};

const Supplier = require("../models/suppliers");

SuppliersCtrl.getSupplier = async (req, res) => {
  const supplier = await Supplier.findById(req.params.id);
  res.send(supplier);
};
SuppliersCtrl.getSuppliers = async (req, res) => {
  const suppliers = await Supplier.find();
  res.json(suppliers);
};
SuppliersCtrl.updateSupplier = async (req, res) => {
  await Supplier.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Proveedor actualizada" });
};
SuppliersCtrl.createSupplier = async (req, res) => {
  const newSupplier = new Supplier(req.body);
  await newSupplier.save();
  res.json({ message: "Proveedor Creado" });
};
SuppliersCtrl.deleteSupplier = async (req, res) => {
  await Supplier.findByIdAndDelete(req.params.id, req.body);
  res.json({ message: "Proveedor Eliminado" });
};
module.exports = SuppliersCtrl;
