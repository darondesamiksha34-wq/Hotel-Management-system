import axios from "axios";

const instance = axios.create({
  baseURL: "https://hotel-management-system-backend-production-0c8a.up.railway.app/api/auth",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default instance;