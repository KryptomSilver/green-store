const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    name: {type : String , require : true},
    tamanio: {type : String , require : true},
    costo: {type : Number , require : true},
    tipo: {type : String , require : true},
},
{
    timestamps : true,
    versionKey: false
})

module.exports = model('Product', ProductSchema)