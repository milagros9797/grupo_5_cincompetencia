const { leerJSON, escribirJSON } = require("../../data");
const Product = require("../../data/Product");


module.exports = (req,res) => {

        const {name, category, description, price} = req.body;

        const mainImage = req.files;
       
        const newProduct = new Product(name, category, description, price, mainImage)
        const products = leerJSON('products');
    
        products.push(newProduct);
    
        escribirJSON(products, 'products')
    
        return res.redirect('/dashboard')


}