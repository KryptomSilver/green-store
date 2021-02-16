const { Router } = require('express');
const UsersCtrl = require('../controllers/users.controller');

const router = Router();
router.get('/',UsersCtrl.getUsers);
router.post('/',UsersCtrl.createUser);
router.get('/:id',UsersCtrl.getUser);
router.delete('/:id',UsersCtrl.deleteUser);
router.put('/:id',UsersCtrl.updateUser);
module.exports = router;