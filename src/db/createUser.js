import pool from "./connection";
<<<<<<< HEAD
export const createUser = async ({ login, password }) => {
  console.log(login, password);
=======

export const createUser = async ({ login, password }) => {
>>>>>>> 38e109438a50cd7bb104489700bfab7033978221
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
<<<<<<< HEAD
};
=======
};
>>>>>>> 38e109438a50cd7bb104489700bfab7033978221
