const {readFileSync} = require('fs')

module.exports = {

    leerJSON : (fileName) => {
        return JSON.parse(readFileSync(`./src/data/${fileName}.json`,'utf8'))
    }
}