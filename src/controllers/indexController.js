const {leerJSON} = require ("../data")

module.exports = {
    index : (req,res) => {
        const products = leerJSON('products');
        // return res.send(products)
        return res.render('index',{
            products
        });
    
 },
 admin:   (req, res)=>{
    //  return res.render('users/dashboard')
    const products = leerJSON('products');
      // return res.send(products)
      return res.render('dashboard',{
          products
      })
    }
}