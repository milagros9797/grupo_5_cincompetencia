const path = require('path')
const {leerJSON} = require ("../data")

module.exports = {
    register : (req,res) =>  {
       return res.render('users/register')
    },
    login : (req,res) =>  {
        return res.render('users/login')
     },
    };