import { pool } from "../db.js";


export const getempoyes = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM employe");
  res.json(rows);
};
export const getempoyesid = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employe WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.length <= 0)
      return res.status(404).json({ message: "recurso no encontrado" });
    else {
      res.status(200).json({ message: "busqueda de la id completa", rows });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createempoyes = async (req, res) => {
  const { name, salary } = req.body;
  const [rows] = await pool.query(
    "INSERT INTO employe(name,salary) VALUES (?, ?)",
    [name, salary]
  );
  res.send({
    id: rows.insertId,
    name,
    salary,
  });
};

export const updateEmpoyes = async (req, res) => {
    try {
        const { id } = req.params;
  const { name, salary } = req.body;
  const [ result ] = await pool.query(
    "UPDATE employe SET name = ?, salary = ? WHERE id = ?",
    [name, salary, id]
  );
  if (result.affectedRows === 0)
    return res.status(404).json({
      message: "no se encuentra la id"
    });
  const [rows] = await pool.query("SELECT * FROM employe WHERE id = ?", [id]);
  res.json(rows[0]);
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
  
};

export const deleteEmpoyes = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM employe WHERE id = ?",
      req.params.id
    );
    if (result.affectedRows <= 0)
      return res.status(404).json({ message: "no se ha encontrado la id" });
    else {
      return res.status(200).json({ message: "se ha eliminado la fila" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
