const EventEmitter = require('events')

const emisorProductos = new EventEmitter()


//cuando detecte una compra o cambio en emisorProductos
emisorProductos.on('compra', (total, cantidad) => {
  console.log(`se realizo ${cantidad} compra por: ${total} dolares`)
})


//cuando se realize una compra emisor buscara el metodo que se ejecuta al realizar una compra
emisorProductos.emit('compra', 54, 2)
emisorProductos.emit('compra', 22, 5)
emisorProductos.emit('compra', 70, 1)