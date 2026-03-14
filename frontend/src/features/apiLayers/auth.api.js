import axios from "axios";
const api = axios.create({
    baseURL: 'http://localhost:3000',
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
            message: 'success'
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
        const response = await api.post('/get-me', { username: username, email, password }).catch()
        return response.data;
    } catch (error) {
        console.log(error);


    }
}