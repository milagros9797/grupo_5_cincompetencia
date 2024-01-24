const { validationResult } = require('express-validator')
const path = require('path');
const User = require('../data/User');

const { leerJSON, escribirJSON } = require("../data");

module.exports = {
    register: (req, res) => {
        return res.render('users/register')
    },
    processRegister:(req,res) => {
      return res.send(req.body)
    },

    login: (req, res) => {
        return res.render('users/login')
     } 

  
    }