const path = require('path')

module.exports = {
    register : (req,res) =>  {
       return res.render('users/register')
    },
    processRegister:(req,res) => {
      return res.send(req.body)
    },

    login : (req,res) =>  {
        return res.render('users/login')
     } 

  
    }