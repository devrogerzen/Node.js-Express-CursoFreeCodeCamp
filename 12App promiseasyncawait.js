function ordenarProducto(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Ordenando: ${producto}`);
    setTimeout(() => {
      if (producto === "taza") {
        resolve("Ordenando una taza con el logo de freecodecamp...");
      } else {
        reject(`Este producto ${producto} no esta disponible actualmente.`);
      }
    }, 2000);
  });
}

function procesarPedido(respuesta) {
  return new Promise((resolve, reject) => {
    console.log("procesando respuesta....");
    console.log(`la respuesta fue: "${respuesta}"`);
    setTimeout(() => {
      resolve("Gracias por tu compra. Disfruta tu producto de freecodecamp");
    }, 4000);
  });
}

/*
ordenarProducto('lapiz')
.then(respuesta => {
  console.log("respuesta recibida")
  console.log(respuesta)
  return procesarPedido(respuesta)
})
.then(respuestaProcesada => {
  console.log(respuestaProcesada)
})
.catch(error => {
  console.log(error)
}) */

//codigo que va a ser mejor que el de arriva con async await

async function realizarPedido(producto) {
  try {
    const respuesta = await ordenarProducto(producto);
    console.log("Respuesta Recibida");
    console.log(respuesta);
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
  } catch (error) {
    console.log(error);
  }
}
realizarPedido("taza");
realizarPedido("lapiz");
