// readable streams, writable streams, duplex streams
const fs = require('fs')

let readableStream = fs.createReadStream('./text.txt')
let writableStream = fs.createWriteStream('./write.txt')

readableStream.on('data', (chunk) => {
  writableStream.write(chunk)
})
