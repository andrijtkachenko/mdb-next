import axios from "axios";

export const loginUserClient = async ({ login, password}) => {
    const data = await axios.post("/api/loginUser", { login,password});
    return data.data;
};