const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    name_product: {type : String , require : true},
    description: {type : String , require : true},
    type_product: {type : String , require : true},
    stock: {type : Number , require : true},
},
{
    timestamps : true,
    versionKey: false
})

module.exports =   model('product', ProductSchema)