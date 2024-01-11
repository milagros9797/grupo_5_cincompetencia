const express = require('express');
const { productDetail, productCart, add, edit } = require('../controllers/productsController');

const router = express.Router();

/* /productos */
router
.get('/productDetail/:id?',productDetail )
.get('/productCart',productCart)
.get('/agregar', add)
.get('/editar/:id?', edit)
.delete('/eliminar/:id',remove)




module.exports = router;


