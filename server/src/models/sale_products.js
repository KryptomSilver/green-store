const { Schema , model } = require('mongoose');

const Sale_ProductsSchema = new Schema({
    fk_sale: {type: Schema.ObjectId, ref: "sales" ,requiere:true},
    fk_product: {type: Schema.ObjectId, ref: "products" ,requiere:true},
    product_sale_cost : {type : Number, require : true},
    num_product : {type : Number , require : true},
},
{
    timestamps : true,
    versionKey: false
})

module.exports = model('sale_products', Sale_ProductsSchema)