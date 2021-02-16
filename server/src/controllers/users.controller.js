const UsersCtrl = {}

const User = require('../models/users');

UsersCtrl.getUser = async(req,res) => {
    const user = await User.findById(req.params.id);
    res.send(user);
}
UsersCtrl.getUsers = async(req,res) => {
    const users = await User.find();
    res.json(users);
}
UsersCtrl.updateUser = async(req,res) => {
    await User.findByIdAndUpdate(req.params.id,req.body);
    res.json({ message : "Usuario actualizado"});
}
UsersCtrl.createUser = async(req,res) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.json({ message : "Usuario Creado"});
}
UsersCtrl.deleteUser = async(req,res) => {
    await User.findByIdAndDelete(req.params.id,req.body);
    res.json({ message : "Usuario Eliminado"});
}
module.exports = UsersCtrl;