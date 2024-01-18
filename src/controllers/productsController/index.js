const add = require('./add')
const create = require('./create')
const remove = require('./remove')
const edit = require('./edit')



module.exports = {
    add, 
    create, 
productDetail : (req,res) => {
            return res.render('products/productDetail')
     },
    
    productCart : (req,res) => {
        return res.render('products/productCart')
     
    }, 
    edit,
   
    remove,
    
    }