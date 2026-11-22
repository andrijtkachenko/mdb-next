import axios from "axios";

export const createUserClient = async ({ login, password}) => {
    const data = await axios.post("/api/createUser", { login,password});
    return data.data;
};
