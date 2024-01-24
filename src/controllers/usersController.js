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

        if (errors.isEmpty()) {

            const {id, firstName, lastName, category} = users.find(u => u.email === email);

            req.session.userLogin = {id, firstName, lastName, category};
            console.log(req.session.userLogin)

            return res.redirect('/');
        } else {
            // Errores de validación
            return res.render('users/login', {
                errors: errors.mapped()
            });
        }
    }

}


