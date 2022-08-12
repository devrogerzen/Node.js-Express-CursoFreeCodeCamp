const fs = require("fs");
//es metodo asincrono

//leer un archivo
/* fs.readFileSync("./index.html", "utf-8", (err, contenido) => {
  if (err) {
    //throw nos permite que detenga la ejecucion del programa y nos de mas detalles de ese error a diferencia de console.log
    throw "err";
  } else {
    console.log(contenido);
  }
  console.log("mensaje ....")
}); */



//cambiar el nombre de un archivo
/* fs.renameSync('index.html', 'main.html', (err) => {
  if(err) {
    throw err
  }
  console.log("nombre cambiado exitosamente")
}) */



//agregar contenido al final de un archivo
/* fs.appendFileSync('index.html', '<p>Hola</p>', (err) => {
  if(err) {
    throw err
  }
  console.log("si no existia se creo y archivo actualizado ")
}) */


//reemplazar todo el contenido de un archivo
/* fs.writeFileSync('index.html', 'contenido nuevo', (err) => {
  if(err) {
    throw err
  }
  console.log("contenido reemplazado exitosamente")
}) */

fs.unlinkSync('main.html', (err) => {
  if(err) {
    throw err
  }
  console.log('archivo eliminado')
})