const { Schema , model } = require('mongoose');

const Purchase_ProductSchema = new Schema({
    fk_purchase: {type: Schema.ObjectId, ref: "purchases" ,requiere:true},
    fk_product: {type: Schema.ObjectId, ref: "products" ,requiere:true},
    product_purchase_cost : {type : Number, require : true},
    num_product : {type : Number , require : true},
},
{
    timestamps : true,
    versionKey: false
})

module.exports = model('purchase_product', Purchase_ProductSchema)