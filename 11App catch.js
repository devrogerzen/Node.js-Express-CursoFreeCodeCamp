const estatusPedido = () => {
  return Math.random() < 0.8;
};


const miPedidoDePizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (estatusPedido()) {
      resolve('pedido exitoso pizza esta en camino')
    } else {
      reject('ocurrio un error ...')
    }
  }, 2000)
})

miPedidoDePizza
  .then((mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion)
  })
  .catch( (mensajeDeError) => {
    console.log(mensajeDeError)
  })



//mmetodo llamado then de resolve, reject pero usando catch
  const manejarPedido = (mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion)
  }
  
  const rechazarPedido = (mensajeDeError) => {
    console.log(mensajeDeError)
  }
  

  miPedidoDePizza.then(manejarPedido, rechazarPedido)
  // o con catch
  miPedidoDePizza.then(manejarPedido).catch(rechazarPedido)

