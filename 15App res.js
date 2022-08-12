const http = require("http");

const servidor = http.createServer((req, res) => {
  console.log("====> res (respuesta)");
  console.log(res.statusCode); // 200  OK
/*   res.statusCode = 404;
  console.log(res.statusCode); //404 Not Found */


  //metodo para obtener metodos de la cabecera o headers

  res.setHeader('content-type', 'application/json')
  console.log(res.getHeader())

  res.end("Hola, mundo");
});

const puerto = 3000;

servidor.listen(puerto, () => {
  console.log(
    `el servidor esta escuchando en http://localhost:${puerto}/    ....`
  );
});
