// readable streams, writable streams, duplex streams
const fs = require('fs')

let readableStream = fs.createReadStream('./text.txt')
let writableStream = fs.createWriteStream('./write2.txt')

readableStream.pipe(writableStream)