const add = require('./add')
const create = require('./create')
const remove = require('./remove')

module.exports = {
    add, 
    create, 
productDetail : (req,res) => {
            return res.render('products/productDetail')
     },
    
    productCart : (req,res) => {
        return res.render('products/productCart')
     
    }, 
    edit: (req,res)=>{
        return res.render('products/product-edit')
    } ,
    remove
    
    }