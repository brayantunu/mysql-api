import { pool } from "../db.js";
export const getindex = async (req,res) => {
    const result = await pool.query('select "Pong" As result')
    res.json(result[0])
};