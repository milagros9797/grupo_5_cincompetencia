const crypto = require('crypto');

function Product(name, category, description, price, mainImage) {
    this.id =  crypto.randomUUID();
    this.name = name.trim();
    this.price = price.trim();
    this.description = description.trim();
    this.mainImage = mainImage ? mainImage.filename : null;
    this.category = category;

}

module.exports = Product