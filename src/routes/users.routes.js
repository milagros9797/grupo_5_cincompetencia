const express = require('express') ;
const { login, register, processRegister } = require('../controllers/usersController');
const userRegisterValidator = require('../../validations/user-register-validator');
const router = express.Router();

/* /usuarios */
router
.get('/ingreso',login)
.get('/registro',register)
.post('/registro',userRegisterValidator, processRegister)

module.exports = router;
