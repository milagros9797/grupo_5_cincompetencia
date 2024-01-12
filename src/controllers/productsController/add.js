const products = require('../../data/products.json')

module.exports =  (req,res)=>{
        return res.render('products/product-add',{products})
    }  