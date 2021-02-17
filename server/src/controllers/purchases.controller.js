const PurchaseCtrl = {}
const Purchase = require('../models/purchases');

PurchaseCtrl.getPurchase = async(req,res) => {
    const purchase = await Purchase.findById(req.params.id);
    res.send(purchase);
}
PurchaseCtrl.getPurchases = async(req,res) => {
    const purchase = await Purchase.find();
    res.json(purchase);
}
PurchaseCtrl.updatePurchase = async(req,res) => {
    await Purchase.findByIdAndUpdate(req.params.id,req.body);
    res.json({ message : "Compra actualizado"});
}
PurchaseCtrl.createPurchase = async(req,res) => {
    const newPurchase = new Purchase(req.body);
    await newPurchase.save();
    res.json({ message : "Compra Creada"});
}
PurchaseCtrl.deletePurchase = async(req,res) => {
    await Purchase.findByIdAndDelete(req.params.id,req.body);
    res.json({ message : "Compra Eliminada"});
}
module.exports = PurchaseCtrl;