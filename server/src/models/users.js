const {Schema,model} = require("mongoose");

const UsersSchema = new Schema({
    name: {type : String, require : true},
    password: {type : String, require : true},
    user_position : {type : String, require : true},
},
{
    timestamps : true,
    versionKey: false
})

module.exports = model('users', UsersSchema);