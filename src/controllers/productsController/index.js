const add = require('./add')
const create = require('./create')
const remove = require('./remove')
const edit = require('./edit')
const productDetail = require('./productDetail')



module.exports = {
    add, 
    create, 
    productDetail,
    productCart : (req,res) => {
        return res.render('products/productCart')
     
    }, 
    edit,
   
    remove,
    
    }