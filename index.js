// Importando datos desde consultas.js
const {
  consultaEstudiantes,
  agregarEstudiante,
  eliminarEstudiante,
  editarEstudiante,
  consultaRut,
  conectarDB,
} = require("./consultas");

// Llamamos a la función para ejecutar la consulta
agregarEstudiante();
eliminarEstudiante();
editarEstudiante();
consultaEstudiantes();
consultaRut();
conectarDB();
