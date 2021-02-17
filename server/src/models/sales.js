const { Schema, model } = require("mongoose");

const SalesSchema = new Schema(
  {
    cost_total: { type: Number, require: true },
    fk_user: { type: Schema.ObjectId, ref: "users" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = model("sales", SalesSchema);
