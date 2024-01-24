const express = require('express');
const { productDetail, productCart, add, edit, create, remove} = require('../controllers/productsController');
const upload = require('../middlewares/upload');

const router = express.Router();

/* /productos */
router
.get('/productDetail/:id?',productDetail ) // /products/
.get('/productCart',productCart)
.get('/agregar', add)
.post('/crear',upload.single('mainImage'),create)
.get('/editar/:id?',edit)
.delete('/eliminar/:id', remove)





module.exports = router;


