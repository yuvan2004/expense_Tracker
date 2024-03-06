const fs = require('fs')
/**
 * 
 */
/**
 * readFileSync,readFile
 * writeFile,writeFilesync
 */

const file = fs.readFileSync('./data.json')
console.log(file)
const data = JSON.parse(file)
console.log(data)
data.author = 'abc'

fs.writeFileSync('./data.json',JSON.stringify(data))


