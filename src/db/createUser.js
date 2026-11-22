import pool from "./connection";
export const createUser = async ({ login, password }) => {
  console.log(login, password);
  const connection = await pool.connect();
  try {
    const result = await connection.query(
      'INSERT INTO users ("login", "password") VALUES ($1, $2) RETURNING *',
      [login, password],
    );
    return result;
  } catch (err) {
    console.log(err);
  }
  connection.release();
};
