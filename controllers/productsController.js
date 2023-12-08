const path = require('path')

module.exports = {
productDetail : (req,res) => res.sendFile(path.join(__dirname,'..', 'views','productDetail.html')),
productCart : (req,res) => res.sendFile(path.join(__dirname,'..', 'views','productCart.html')),
 
}