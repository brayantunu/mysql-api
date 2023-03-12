// const mysql = require('mysql');
import { createPool } from "mysql2/promise";
import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from "./config.js";
// export const pool =  createPool({
//     host: DB_HOST,
//     user: DB_USER,
//     password: DB_PASSWORD,
//     port: DB_PORT,
//     database: DB_DATABASE
// })
export const pool = createPool({
  host: DB_HOST,
  user: DB_USER, 
  port: DB_PORT,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});
console.log(DB_PORT,DB_HOST,DB_DATABASE,DB_PASSWORD,DB_USER);

// pool.getConnection((error, connection) => {
//   if (error) {
//     console.error('Error de conexión: ' + error.stack);
//     return;
//   }
//   console.log('Conexión establecida con el ID: ' + connection.threadId);
// });
