const express = require('express');
const productsController= require('../controllers/productsController')
const router = express.Router();

/* /products */
router
.get('/productDetail',productsController.productDetail )
.get('/productCart',productsController.productCart)



module.exports = router;


