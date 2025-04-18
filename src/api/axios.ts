import axios from "axios";
const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        
    },
})
axiosClient.interceptors.request.use(
    (response) => response,
    (error) => {Promise.reject(error)}
)
export default axiosClient;