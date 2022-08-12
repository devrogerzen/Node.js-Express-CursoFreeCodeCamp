const estatusPedido = () => {
  return Math.random() < 0.8;
};

/* for (let i = 0; i < 10; i++) {
  estatusPedido()
} */

const miPedidoDePizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (estatusPedido()) {
      resolve('pedido exitoso pizza esta en camino')
    } else {
      reject('ocurrio un error ...')
    }
  }, 2000)
})

/* const manejarPedido = (mensajeDeConfirmacion) => {
  console.log(mensajeDeConfirmacion)
}

const rechazarPedido = (mensajeDeError) => {
  console.log(mensajeDeError)
}

miPedidoDePizza.then(manejarPedido, rechazarPedido)
 */

miPedidoDePizza
  .then((mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion)
  })
  .then(null, (mensajeDeError) => {
    console.log(mensajeDeError)
  })

