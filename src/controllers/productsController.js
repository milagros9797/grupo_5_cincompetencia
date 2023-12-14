module.exports = {

    add: (req,res)=>{
        return res.render('products/product-add')
    }    
    ,productDetail : (req,res) => {
            return res.render('products/productDetail')
     },
    
    productCart : (req,res) => {
        return res.render('products/productCart')
     
    }, 
    edit: (req,res)=>{
        return res.render('products/product-edit')
    }  
    
    }