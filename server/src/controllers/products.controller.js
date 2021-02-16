const ProductsCtrl = {}

const Product = require('../models/products');

ProductsCtrl.getProduct = async (req, res) => {
    const product = await Product.findById(req.params.id)
    res.send(product);
}
ProductsCtrl.getProducts = async (req, res) => {
    const products = await Product.find()
    res.json(products)
}
ProductsCtrl.createProduct = async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.json({ message :"Producto registrado"})
}
ProductsCtrl.deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id)
    res.json({ message :"Producto Eliminado"})
}
ProductsCtrl.updateProduct = async (req, res) => {
    await Product.findByIdAndUpdate(req.params.id,req.body)
    res.json({ message :"Producto Actualizado"})
}

module.exports = ProductsCtrl;