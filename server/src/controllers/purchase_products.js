const PurchaseProductCtrl = {}
const PurchaseProduct= require('../models/purchase_product');

PurchaseProductCtrl.getPurchaseProduct = async(req,res) => {
    const purchaseproduct = await PurchaseProduct.findById(req.params.id);
    res.send(purchaseproduct);
}
PurchaseProductCtrl.getPurchaseProducts = async(req,res) => {
    const purchaseproduct = await PurchaseProduct.find();
    res.json(purchaseproduct);
}
PurchaseProductCtrl.updatePurchaseProduct = async(req,res) => {
    await PurchaseProduct.findByIdAndUpdate(req.params.id,req.body);
    res.json({ message : "Producto actualizado"});
}
PurchaseProductCtrl.createPurchaseProduct = async(req,res) => {
    const newPurchaseproduct = new Purchase(req.body);
    await newPurchaseproduct.save();
    res.json({ message : "Producto Creado"});
}
PurchaseProductCtrl.deletePurchaseProduct = async(req,res) => {
    await PurchaseProduct.findByIdAndDelete(req.params.id,req.body);
    res.json({ message : "Producto Eliminado"});
}
module.exports = PurchaseProductCtrl;