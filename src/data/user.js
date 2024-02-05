const bcryptjs = require("bcryptjs")
const crypto = require('crypto');

function User(name, lastname, email, password) {
    this.id =  crypto.randomUUID();
    this.name = name.trim();
    this.lastname = lastname.trim();
    this.email = email.trim();
    this.password = bcryptjs.hashSync(password.trim(),10);
    this.role = "User"

}

module.exports = User