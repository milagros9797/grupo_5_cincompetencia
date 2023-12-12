const express = require('express');
const { productDetail, productCart } = require('../controllers/productsController');

const router = express.Router();

/* /productos */
router
.get('/productDetail/:id?',productDetail )
.get('/productCart',productCart)



module.exports = router;


