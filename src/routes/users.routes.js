const express = require('express') ;
const { login, register, processRegister, process_login, logout, profile } = require('../controllers/usersController');
const userRegisterValidator = require('../../validations/user-register-validator');
const loginValidation = require('./../../validations/user-login-validator');
const checkUserLogin = require('../middlewares/checkUserLogin');
const checkAuthUser = require('../middlewares/checkAuthUser');
const router = express.Router();

/* /usuarios */
router
.get('/ingreso',checkAuthUser,login)
.post('/ingreso', loginValidation,process_login)
.get('/registro', checkAuthUser, register)
.post('/registro', userRegisterValidator, processRegister)
.get('/salir',logout)
.get('/perfil',checkUserLogin, profile)

module.exports = router;
