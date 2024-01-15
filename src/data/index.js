const {readFileSync, writeFileSync} = require('fs')

module.exports = {

    leerJSON : (fileName) => {
        return JSON.parse(readFileSync(`./src/data/${fileName}.json`,'utf8'))
    },
    escribirJSON : (data, filename) => {
        writeFileSync(`./src/data/${filename}.json`, JSON.stringify(data,null,3), 'utf-8')
        return null
    }

}