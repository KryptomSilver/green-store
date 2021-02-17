const { Router } = require('express');
const SalesCtrl = require('../controllers/sales.controller');

const router = Router();
router.get('/',SalesCtrl.getSales);
router.get('/sales/',SalesCtrl.get);
router.post('/',SalesCtrl.createSale);
router.get('/:id',SalesCtrl.getSale);
router.delete('/:id',SalesCtrl.deleteSale);
router.put('/:id',SalesCtrl.updateSale);
module.exports = router;