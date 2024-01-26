const { check, body } = require("express-validator");
// const { compareSync } = require('bcryptjs');
const users = require('./../src/data/users.json');

module.exports = [
    check("email")
        .notEmpty().withMessage('El email es obligatorio'),
    body("password")
        .notEmpty().withMessage("La contraseña es obligatoria").bail()
        .custom((value, { req }) => {
            const email = req.body.email; 
                        
            const user = users.find(u => u.email === email);
            
            if (!user || value.trim() !== user.password) { 
                return false; 
            }
        
            return true;
        }).withMessage('Su contraseña o Usuario son Incorrectos')    
];

