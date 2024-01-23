const path = require('path')

module.exports = {
    register : (req,res) =>  {
       return res.render('users/register')
    },
    processRegister : (req,res) => {
      const errors = validationResult(req);
      const {name, surname, email, password} = req.body;
     
      if(errors.isEmpty()){

         const users = leerJSON('users');
         const newUser = new User(name, surname, email, password);
         
         users.push(newUser);

         escribirJSON(users, 'users')

         return res.redirect('/usuarios/ingreso')
         

     }else{
         return res.render('users/register',{
             old : req.body,
             errors : errors.mapped()
         })
     }
    },

    login : (req,res) =>  {
        return res.render('users/login')
     }, 

    perfil: (req,res)=>{
        return res.render('users/perfil')
    },
   
  
    }