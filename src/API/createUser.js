import axios from "axios";

<<<<<<< HEAD
export const createUserClient = async ({ login, password}) => {
    const data = await axios.post("/api/create", { login,password});
    return data.data;
};
=======
export const createUserClient = async ({ login, password }) => {
  const data = await axios.post("/api/createUser", { login, password });
  return data.data;
};
>>>>>>> 38e109438a50cd7bb104489700bfab7033978221
