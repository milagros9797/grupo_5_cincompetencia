const express = require('express');
const { login, register, processRegister, perfil } = require('../controllers/usersController');
const perfilValidator = require('../../validations/perfil-validator');
const router = express.Router();

/* /usuarios */
router
.get('/ingreso',login)
.get('/registro',register)
.post('./registro',perfilValidator, processRegister)
.get('../perfil', perfil)


module.exports = router;
