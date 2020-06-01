// readable streams, writable streams, duplex streams
const fs = require('fs')

let readableStream = fs.createReadStream('./text.txt')

let chunkCounter = 0
readableStream.on('data', (chunk) => {
  chunkCounter++
  console.log('==================================================')
  console.log('=========== new chunk no.' + chunkCounter + ' received ==============')
  console.log('==================================================')
  console.log(chunk)
})
