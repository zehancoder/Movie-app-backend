import axios from "axios";
export const likeApi = async (movieId) => {
    try {
        const response = await axios.post(`https://movie-app-backend-szlu.onrender.com/movie/like/${movieId}`, {}, { withCredentials: true });
        console.log(response);
        return {
            success: true,
            data: response.data,
            message: response.data.message
        }
    } catch (error) {
        return {
            success: false,
            message: error.response.data.message,
        }
    }
}