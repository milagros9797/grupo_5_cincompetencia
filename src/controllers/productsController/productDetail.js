const products = require('./../../data/products.json')
module.exports = (req,res) => {
    const product = products.find((product) => product.id === +req.params.id);

    return res.render('products/productDetail', {
        ...product
    })
}