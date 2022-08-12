// se usa para ejecutar codigo en numero infinito de veces con un retraso especifico de milisegundos

//setInterval(funcion, intervalo, arg1, arg2, argumentoN..)


function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`);
}


setInterval(mostrarTema, 2000, "node.js")