import { pool } from "../db.js";
export const getindex = async (req,res) => {
    const result = await pool.query('select "Pong" As result')
    res.json(result[0])
};


// export const getindex = async (error, connection) => {
//     if (error) {
//       console.error('Error de conexión: ' + error.stack);
//       return;
//     }
//     console.log('Conexión establecida con el ID: ' + connection.threadId);
//     const result = await pool.query('select "Pong" As result')
//     res.json(result[0])
//   }; 