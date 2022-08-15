const express = require("express");
const app = express();
const { infoCursos } = require("./cursos");


const routerProgramacion = express.Router()
app.use("/api/cursos/programacion", routerProgramacion)


app.get("/", (req, res) => {
  res.send("Mi primer servidor. Cursosss 🎮");
});

app.get("/api/cursos", (req, res) => {
  res.send(JSON.stringify(infoCursos));
});

//PROGRAMACION
app.get("/api/cursos/programacion", (req, res) => {
  //res.send(infoCursos)
  res.send(JSON.stringify(infoCursos.programacion));
});

app.get("/api/cursos/programacion/:lenguaje", (req, res) => {
  const lenguaje = req.params.lenguaje;

  const resultados = infoCursos.programacion.filter(
    (cursos) => cursos.lenguaje === lenguaje
  );
  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }
  if (req.query.ordenar === "vistas") {
    return res.send(
      JSON.stringify(resultados.sort((a, b) => a.vistas - b.vistas))
    );
  }
  res.send(JSON.stringify(resultados));
});

app.get("/api/cursos/programacion/:lenguaje/:nivel", (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;
  const resultados = infoCursos.programacion.filter(
    (cursos) => cursos.lenguaje === lenguaje && cursos.nivel === nivel
  );
  if (resultados.length === 0) {
    return res
      .status(404)
      .send(`No se encontrarion cursos de ${lenguaje} de nivel ${nivel}`);
  }
  res.send(JSON.stringify(resultados));
});

//MATEMATICAS
app.get("/api/cursos/matematicas", (req, res) => {
  const lenguaje = req.params.lenguaje;
  res.send(JSON.stringify(infoCursos.matematicas));
});

app.get("/api/cursos/matematicas/:tema", (req, res) => {
  const tema = req.params.tema;
  const resultados = infoCursos.matematicas.filter(
    (cursos) => cursos.tema === tema
  );
  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${tema}`);
  }
  res.send(JSON.stringify(resultados));
});

app.get("/api/cursos/matematicas/:tema/:nivel", (req, res) => {
  const tema = req.params.tema;
  const nivel = req.params.nivel;
  const resultados = infoCursos.matematicas.filter(
    (cursos) => cursos.tema === tema && cursos.nivel === nivel
  );
  if (resultados.length === 0) {
    return res
      .status(404)
      .send(`No se encontraron cursos de ${tema} de nivel ${nivel}`);
  }
  res.send(JSON.stringify(resultados));
});

const PUERTO = process.env.PORT || 3000;
app.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO} ...`);
});
