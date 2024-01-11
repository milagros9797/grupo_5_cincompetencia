const { leerJSON, escribirJSON } = require("../../data");

module.exports = (req,res) => {

    const {id} = req.params

    const products = leerJSON('products');

    return res.redirect('/dashboard')
}