const express = require('express');
const { login, register, processRegister } = require('../controllers/usersController');
const router = express.Router();

/* /usuarios */
router
.get('/ingreso',login)
.post('/ingreso',loginValidation,process_login)
.get('/registro',register)
.post('./registro', processRegister)

module.exports = router;
