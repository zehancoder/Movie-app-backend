import axios from "axios"
export const getLikeMovie = async () => {
    try {
        const response = await axios.get('https://movie-app-backend-szlu.onrender.com/like/movies', { withCredentials: true });
        return {
            success: true,
            data: response.data,
            message: response.data.message
        }
    } catch (error) {
        return {
            success: false,
            message: error.response.data.message
        }
    }
}