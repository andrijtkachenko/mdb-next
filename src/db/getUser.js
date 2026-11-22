import pool from "./connection";
export const getUser = async ({ login, password }) => {
  console.log(login, password);
  const connection = await pool.connect();
  try {
    const result = await connection.query(
      'SELECT "login", "id" FROM users WHERE "login" = $1 AND "password" = $2',
      [login, password],
    );
    return result;
  } catch (err) {
    console.log(err);
  }
  connection.release();
};
