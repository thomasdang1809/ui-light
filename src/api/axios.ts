import axios from "axios";
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nZHhrbW9lamFjcXBubm92Y2FyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzMDAyMTcsImV4cCI6MjA2MDg3NjIxN30.mxMhuhYXkM3mic0PvnTQrEbNVnlxHQsBKCxnqm825vc'
const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL + '/rest/v1/',
    timeout: 5000,
    headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',

        
    },
})
axiosClient.interceptors.request.use(
    (response) => response,
    (error) => {Promise.reject(error)}
)
export default axiosClient;