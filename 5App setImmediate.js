// setImmediate(funcion, argumento1, argumento2, argumentoN...)

function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`);
}

console.log("antes de setImmediate()");

setImmediate(mostrarTema, "Node.js");

console.log("despues de setImmediate()");

//da la prioridad a que se ejecute setImmediate() inmediatamente luego de que se ejecute todo el codigo sincrono