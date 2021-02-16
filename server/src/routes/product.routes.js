const { Router } = require('express');
const ProductsCtrl = require('../controllers/products.controller.js');

const router = Router();


router.get('/',ProductsCtrl.getProducts);
router.post('/',ProductsCtrl.createProduct);
router.get('/:id',ProductsCtrl.getProduct);
router.delete('/:id',ProductsCtrl.deleteProduct);
router.put('/:id',ProductsCtrl.updateProduct);
module.exports = router;