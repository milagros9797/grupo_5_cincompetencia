const { validationResult } = require('express-validator')
const path = require('path');
const User = require('../data/User');

const { leerJSON, escribirJSON } = require("../data");

module.exports = {
    
    register: (req, res) => {
        return res.render('users/register')
    },

    processRegister: (req, res) => {
        const errors = validationResult(req);
        const { name, surname, email, password } = req.body;
        if (errors.isEmpty()) {
            const users = leerJSON('users');
            const newUser = new User(name, surname, email, password)
            users.push(newUser)

            escribirJSON(users, 'users');

            return res.redirect('/users/ingreso')

        } else {
            return res.render('users/register', {
                old: req.body,
                errors: errors.mapped()
            })
        }
    },

    login: (req, res) => {
        return res.render('users/login')
    },

    process_login: (req, res) => {
        const errors = validationResult(req);
        const users = require('../data/users.json')
        const { email } = req.body;

        if (errors.isEmpty()) {

            const {id, firstName, lastName, role} = users.find(u => u.email === email);

            req.session.userLogin = {id, firstName, lastName, role};
            console.log(req.session.userLogin)

            return res.redirect('/');
        } else {
            // Errores de validación
            return res.render('users/login', {
                errors: errors.mapped()
            });
        }
    },
    logout:(req,res)=>{
        req.session.destroy()

        return res.redirect('/')
    }

}


