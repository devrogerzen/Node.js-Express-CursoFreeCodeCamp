
//setTimeout(function, retraso, argumento1, argumento2, argumentoN...)

function mostrarTema(tema) {
  
  console.log(`Estoy aprendiendo ${tema}`)
}


setTimeout(mostrarTema, 5000, "node.js" )


function sumar(a , b) {
  console.log( a + b )
}

setTimeout(sumar, 2000, 5, 6)