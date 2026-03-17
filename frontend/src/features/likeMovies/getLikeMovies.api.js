import axios from "axios"
export const getLikeMovie = async () => {
    try {
        const response = await axios.get('http://localhost:3000/like/movies', { withCredentials: true });
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