const SaleProductsCtrl = {}
const SaleProducts = require('../models/sale_products');

SaleProductsCtrl.getSaleProduct = async(req,res) => {
    const saleProducts = await SaleProducts.findById(req.params.id);
    res.send(saleProducts);
}
SaleProductsCtrl.getSaleProducts = async(req,res) => {
    const saleProducts = await SaleProducts.find();
    res.json(saleProducts);
}
SaleProductsCtrl.updateSaleProduct = async(req,res) => {
    await SaleProducts.findByIdAndUpdate(req.params.id,req.body);
    res.json({ message : "Producto actualizado"});
}
SaleProductsCtrl.createSaleProduct = async(req,res) => {
    const newSaleProducts = new SaleProducts(req.body);
    await newSaleProducts.save();
    res.json({ message : "Producto Creado"});
}
SaleProductsCtrl.deleteSaleProduct = async(req,res) => {
    await SaleProducts.findByIdAndDelete(req.params.id,req.body);
    res.json({ message : "Producto Eliminado"});
}
module.exports = SaleProductsCtrl;