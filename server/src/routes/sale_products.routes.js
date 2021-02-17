const { Router } = require('express');
const SalesProductsCtrl = require('../controllers/sale_products');

const router = Router();
router.get('/',SalesProductsCtrl.getSaleProducts);
router.post('/',SalesProductsCtrl.createSaleProduct);
router.get('/:id',SalesProductsCtrl.getSaleProduct);
router.delete('/:id',SalesProductsCtrl.deleteSaleProduct);
router.put('/:id',SalesProductsCtrl.updateSaleProduct);
module.exports = router;