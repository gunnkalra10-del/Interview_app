import axios from "axios";

const api = axios.create({
    baseURL: "https://interviewapp-production-2e32.up.railway.app",
});

export default api;