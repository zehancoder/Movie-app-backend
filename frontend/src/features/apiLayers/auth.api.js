import axios from "axios";
const api = axios.create({
    baseURL: 'https://movie-app-backend-szlu.onrender.com',
    withCredentials: true
})
// register user
export async function register(username, email, password) {
    try {
        const response = await api.post('/register', { username: username, email, password });
        return {
            success: true,
            data: response.data,
            message: 'success'
        }
    } catch (error) {
        return {
            success: false,
            message: error.response.data.message
        }
    }
}
// login users
export async function login(email, password) {
    try {

        const response = await api.post('/login', { email, password });
        return {
            success: true,
            data: response.data,
            message: 'Success'
        };

    } catch (error) {

        return {
            success: false,
            message: error.response?.data?.message || "Something went wrong"
        };

    }
}

export async function getMe() {

    try {
        const response = await api.get('/get-me')
        return {
            success: true, 
            data: response.data,
            message: "Success"
        }
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message
        }
    }
}