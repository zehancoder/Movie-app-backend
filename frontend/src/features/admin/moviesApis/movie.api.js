import axios from "axios"

const api = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
})
export const movieApi = async () => {
    try {
        const response = await api.get('/get/movies');
        return {
            success: true,
            data: response.data,
            message: 'Success'
        }
    } catch (error) {  
        return {
            success: false,
            message: error.response.data.message
        }
    }
}
export const deleteMovie = async(movieId) => {
    try {
        const response = api.delete(`/movies/delete/${movieId}`);
        return {
            success: true,
            data: response.data,
            message: 'Success'
        }
    } catch (error) {   
        return {
            success: false,
            message: error.data.response.message,
        }
    }
}