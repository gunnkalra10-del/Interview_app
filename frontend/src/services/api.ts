import axios from "axios";

const api = axios.create({
    baseURL: "https://interviewapp-production-6053.up.railway.app",
});

export default api;