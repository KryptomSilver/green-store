const { Router } = require('express');
const PurchaseProductsCtrl = require('../controllers/purchase_products');

const router = Router();


router.get('/',PurchaseProductsCtrl.getPurchaseProducts);
router.post('/',PurchaseProductsCtrl.createPurchaseProduct);
router.get('/:id',PurchaseProductsCtrl.getPurchaseProduct);
router.delete('/:id',PurchaseProductsCtrl.deletePurchaseProduct);
router.put('/:id',PurchaseProductsCtrl.updatePurchaseProduct);
module.exports = router;