const express = require('express');
const { index, admin } = require('../controllers/indexController');
const checkAdmin = require('../middlewares/checkAdmin');

const router = express.Router();

/* / */
router
.get('/',index)
.get('/dashboard',checkAdmin, admin)


module.exports = router