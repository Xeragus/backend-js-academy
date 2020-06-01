let events = require('events')
// event emitter
let emitter = new events.EventEmitter()

emitter.on('ourEvent', message => {
  console.log('Wohoooo this is a reaction to: ' + message)
})

emitter.emit('ourEvent', 'Our very first event')
