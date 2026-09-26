import { pool } from "../../config/db";

const createUser = async (name: string, email: string) => {
  const result = await pool.query(
    `INSERT INTO users(name, email) VALUES($1, $2) RETURNING *`,
    [name, email],
  );

  return result;
};

const getUser = async () => {
  const result = await pool.query(`SELECT * FROM users`);
  return result;
};

const getSingleUser = async (id: string) => {
  const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
  return result;
};

const updateUser = async (name: string, id: string) => {
  const result = await pool.query(
    `UPDATE users SET name=$1 WHERE id=$2 RETURNING *`,
    [name, id],
  );
  return result;
};

const deleteUser = async (id: string) => {
  const result = await pool.query(`DELETE FROM users WHERE id = $1`, [id]);
  return result;
};

export const userServices = {
  createUser,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser
};
