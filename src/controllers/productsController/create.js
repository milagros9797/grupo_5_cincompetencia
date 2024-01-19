const { validationResult } = require("express-validator");
const { leerJSON, escribirJSON } = require("../../data");
const Product = require("../../data/Product");
 const fs = require('fs');

module.exports = (req,res) => {

        const errors = validationResult(req);
        if(errors.isEmpty()){ 

        const {name, category, description, price} = req.body;

        const mainImage = req.file;
       
        const newProduct = new Product(name, category, description, price, mainImage)
        const products = leerJSON('products');
    
        products.push(newProduct);
    
        escribirJSON(products, 'products')
    
        return res.redirect('/dashboard')
 }else{
        if(req.file){
        fs.existsSync(`public/images/${req.file.filename}`) &&
        fs.unlinkSync(`public/images/${req.file.filename}`)
        }
        return res.render('products/product-add',{
                errors : errors.mapped(),
                old : req.body
        })
 }

}