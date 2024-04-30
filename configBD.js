// Importando la librería de PostgreSQL
const { Pool } = require("pg");

// Conexión a través del objeto config
const config = {
  user: "escribe tu usuario",
  host: "localhost",
  database: "alwaysmusic",
  password: "escribe tu contraseña",
  port: 5432,

  // No se utilizaron los siguientes datos, ya que se implemntó await pool.end() para finalizar la conexión
  // max: 20,
  // min: 2,
  // idleTimeoutMillis: 30000,
  // connectionTimeoutMillis: 2000,
};

const pool = new Pool(config);

module.exports = pool;
