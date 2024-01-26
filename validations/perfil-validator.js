const { check,} = require("express-validator");
const { leerJSON } = require("../src/data");

module.exports = [
    check("name")
        .notEmpty().withMessage("Se requiere un nombre").bail()
        .isLength({
        min: 2
    }).withMessage("Mínimo dos caracteres").bail()
    .isAlpha('es-ES',{ignore: ' '}).withMessage('Solo caracteres alfabéticos'),


check("surname")
    .notEmpty().withMessage("Se requiere un apellido").bail()
    .isLength({
        min: 2
    }).withMessage("Mínimo dos caracteres").bail()
    .isAlpha('es-ES',{ignore: ' '}).withMessage('Solo caracteres alfabéticos'),


check("email")
    .notEmpty().withMessage('El email es obligatorio').bail()
    
]

  