const express = require('express') ;
const { login, register, processRegister, process_login } = require('../controllers/usersController');
const userRegisterValidator = require('../../validations/user-register-validator');
const loginValidation = require('./../../validations/user-login-validator')
const router = express.Router();

/* /usuarios */
router
.get('/ingreso',login)
.post('/ingreso',loginValidation,process_login)
.get('/registro',register)
.post('/registro',userRegisterValidator, processRegister)

module.exports = router;
