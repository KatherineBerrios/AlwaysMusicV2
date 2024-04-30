// Importando datos desde la base de datos
const pool = require("./configBD");

// Valores ingresados en la terminal para los atributos de la tabla estudiantes
values = [
  (nombre = process.argv[2]),
  (rut = process.argv[3]),
  (curso = process.argv[4]),
  (nivel = process.argv[5]),
];

// Datos con los que se realizaron las pruebas
//["Brian May" "12.345.678-9" Guitarra 7];

// Función asíncrona para probar la conexión a la base de datos
const conectarDB = async () => {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("Conexión exitosa, fecha y hora actuales:", res.rows[0]);

  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
  await pool.end();
};

// Insertando datos en la tabla estudiantes utilizando consulta parametrizada
const agregarEstudiante = async () => {
  const queryConfig = {
  text: "INSERT INTO estudiantes (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4)",
  values: [nombre, rut, curso, nivel],
  };

try {
  const result = await pool.query(queryConfig);
  console.log(`Estudiante ${nombre} agregado con éxito`);

} catch (error) {
  console.error("Error al agregar al estudiante.", error);
}
  await pool.end();
};

// Actualizando datos en la tabla estudiantes utilizando consulta parametrizada
const editarEstudiante = async () => {
  const queryConfig = {
  text: "UPDATE estudiantes SET nombre = $1, rut = $2, curso =$3, nivel = $4",
  values: [nombre, rut, curso, nivel],
};

try {
  const result = await pool.query(queryConfig);
  console.log(`Estudiante ${nombre} editado con éxito`);

} catch (error) {
  console.error("Error al actualizar los datos.", error);
}

  await pool.end();
};

// Consultando datos de la tabla estudiantes por rut utilizando consulta parametrizada
const  consultaRut= async () => {
  const queryConfig = {
    // Mostrar los datos en forma de arreglos con rowMode
    rowMode: "array",
    text: "SELECT * FROM estudiantes WHERE rut = $1",
    values: [(rut = process.argv[2])],
  };

try {
  const result = await pool.query(queryConfig);
  console.log("Mostrando los datos del estudiante:", result.rows);

} catch (error) {
  console.error("Error en la consulta de los datos.", error);
}

  await pool.end();
};

// Consultando todos los datos de la tabla estudiantes utilizando consulta parametrizada
const consultaEstudiantes = async () => {
  const queryConfig = {
    // Mostrar los datos en forma de arreglos con rowMode
    rowMode: "array",
    text: "SELECT * FROM estudiantes",
  };

  try {
    const result = await pool.query(queryConfig);
    console.log("Registro de estudiantes:", result.rows);
  } catch (error) {
    console.error("Error en la consulta de los datos.", error);
    }
    await pool.end();
};

// Borrando datos en la tabla estudiantes utilizando consulta parametrizada
const eliminarEstudiante = async () => {
  const queryConfig = {
  text: "DELETE FROM estudiantes WHERE rut = $1",
  values: [rut = process.argv[2]],
  };

  try {
    const result = await pool.query(queryConfig);
    console.log(`Estudiante con rut ${rut} eliminado con éxito`);
  } catch (error) {
      console.error("Error en la eliminación de los datos.", error);
    }

    await pool.end();
};

// Exporta los datos de cada función
module.exports = {conectarDB, agregarEstudiante, editarEstudiante, eliminarEstudiante,consultaEstudiantes, consultaRut};