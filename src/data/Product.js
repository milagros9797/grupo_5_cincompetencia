const crypto = require('crypto');

function Product(name, category, description, price,  color, stock, talle, mainImage) {
    this.id =  crypto.randomUUID();
    this.name = name.trim();
    this.price = price.trim();
    this.description = description.trim();
    this.mainImage = mainImage ? mainImage.filename : null;
    this.category = category;
    this.talle = talle;
    this.color = color;
    this.stock = stock;

}

module.exports = Product