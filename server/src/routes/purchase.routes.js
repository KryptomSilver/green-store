const { Router } = require('express');
const PurchaseCtrl = require('../controllers/purchases.controller');

const router = Router();


router.get('/',PurchaseCtrl.getPurchases);
router.post('/',PurchaseCtrl.createPurchase);
router.get('/:id',PurchaseCtrl.getPurchase);
router.delete('/:id',PurchaseCtrl.deletePurchase);
router.put('/:id',PurchaseCtrl.updatePurchase);
module.exports = router;