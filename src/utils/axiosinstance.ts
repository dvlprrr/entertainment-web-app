import axios from "axios"
import { BASE_URL } from "../features/config"

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

axiosInstance.interceptors.request.use(
  (config) => {
    const jwt = localStorage.getItem("jwt")
    if (jwt) {
      config.headers.Authorization = `Bearer ${jwt}`
    }
    return config
  },
  (error) => Promise.reject(error),
)
