const {Schema,model} = require("mongoose");

const SuppliersSchema = new Schema({
    name_supplier: {type : String, require : true},
    cell_number: {type : String, require : true},
    address : {type : String, require : true},
},
{
    timestamps : true,
    versionKey: false
})

module.exports = model('suppliers', SuppliersSchema);