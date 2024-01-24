const {leerJSON} = require ("../data")

module.exports = {
    index: (req, res) => {
        const products = leerJSON('products');
        // return res.send(products)
        const recomendados = [];
        let productosAgregados = 0;

        products.forEach(producto => {
            if (productosAgregados < 8) {
                recomendados.push(producto);
                productosAgregados++;
            }
        });
        return res.render('index',{
            recomendados
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