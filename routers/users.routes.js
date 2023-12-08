const express = require('express');
const usersController = require('../controllers/usersController')
const router = express.Router();

/* /users */
router
.get('/login',usersController.login)
.get('/register',usersController.register)


module.exports = router;
