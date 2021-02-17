const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('port',process.env.PORT || 4000);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use("/api/products",require('./routes/product.routes'));
app.use("/api/users",require('./routes/user.routes'));
app.use("/api/sales",require('./routes/sale.routes'));
app.use("/api/suppliers",require('./routes/supplier.routes'));
app.use("/api/purchases",require('./routes/purchase.routes'));
app.use("/api/purchase_products",require('./routes/purchase_produts.routes'));
app.use("/api/sale_products",require('./routes/sale_products.routes'));
module.exports = app;