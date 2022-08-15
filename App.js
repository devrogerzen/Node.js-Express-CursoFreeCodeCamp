const http = require("http");

const cursos = require("./cursos");

const servidor = http.createServer((req, res) => {
  //const { method } = req; o tambien
  const metodo = req.method;

  switch (metodo) {
    case "GET":
      return manejarSolicitudGET(req, res);

    case "POST":
      return manejarSolicitudPOST(req, res);

    default:
      res.statusCode = 501;
      res.end(`El metodo no puede ser manejado por el servidor: ${metodo}`);
  }
});

function manejarSolicitudGET(req, res) {
  let path = req.url;

  console.log(res.statusCode);

  if (path === "/") {
    //res.statusCode = 200;
    //res.writeHead(200, {'Content-Type': 'application/json' })
    return res.end(
      "Bienvenidos a mi primer servidor y API creados con Node.js"
    );
  } else if (path === "/cursos") {
    //res.statusCode = 200;
    return res.end(JSON.stringify(cursos.infoCursos));
  } else if (path === "/cursos/programacion") {
    //res.statusCode = 200;
    return res.end(JSON.stringify(cursos.infoCursos.programacion));
  } else if (path === "/cursos/matematicas") {
    //es.statusCode = 200;
    return res.end(JSON.stringify(cursos.infoCursos.matematicas));
  }

  res.statusCode = 404;
  res.end("El recurso solicitado no existe...");
}

function manejarSolicitudPOST(req, res) {
  let path = req.url;
  if (path === "/cursos/programacion") {
    let cuerpo = "";

    req.on("data", (contenido) => {
      cuerpo += contenido.toString();
    });

    req.on("end", () => {
      console.log(cuerpo);
      console.log(typeof cuerpo);
      //convertir a un objeto de Javascript
      cuerpo = JSON.parse(cuerpo)
      console.log(typeof cuerpo)
      console.log(cuerpo.titulo)
      res.end(
        "El servidor recibio una solicitud POST para /cursos/programacion"
      );
    });

    //res.statusCode = 200;
    //return res.end('El servidor recibio una solicitud POST para /cursos/programacion')
  }
}

const PUERTO = 3000;
servidor.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});
