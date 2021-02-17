const { Schema, model } = require("mongoose");

const PurchasesSchema = new Schema(
  {
    cost_total: { type: Number, require: true },
    fk_user: { type: Schema.ObjectId, ref: "users" ,require :true},
    fk_supplier: { type: Schema.ObjectId, ref: "suppliers" ,requiere:true},
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = model("purchases", PurchasesSchema);