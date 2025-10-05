import axios from "axios";
import { useAuthStore } from "../../store/useAuthStore";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// REQUEST INTERCEPTOR
api.interceptors.request.use(
    (config) => {
        const token = useAuthStore.getState().token;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        console.log("➡️ [REQUEST]", config.method?.toUpperCase(), config.url, config.data);
        return config;
    },
    (error) => {
        console.error("❌ [REQUEST ERROR]", error);
        return Promise.reject(error);
    }
);

// RESPONSE INTERCEPTOR
api.interceptors.response.use(
    (response) => {
        console.log("✅ [RESPONSE]", response.status, response.config.url, response.data);
        return response;
    },
    (error) => {
        console.error("⚠️ [RESPONSE ERROR]", error.response?.status, error.response?.data);

        // jika token invalid atau expired
        if (error.response?.status === 401 || error.response?.status === 403) {
            const { clearToken } = useAuthStore.getState();
            clearToken();
            window.location.href = "/login"; // redirect ke login
        }

        return Promise.reject(error);
    }
);


export default api; 