import axios from "axios";

export const createUserClient = async ({ login, password}) => {
    const data = await axios.post("/api/create", { login,password});
    return data.data;
};