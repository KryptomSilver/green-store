const { Router } = require('express');
const SupplierCtrl = require('../controllers/suppliers.controller');

const router = Router();
router.get('/',SupplierCtrl.getSuppliers);
router.post('/',SupplierCtrl.createSupplier);
router.get('/:id',SupplierCtrl.getSupplier);
router.delete('/:id',SupplierCtrl.deleteSupplier);
router.put('/:id',SupplierCtrl.updateSupplier);
module.exports = router;