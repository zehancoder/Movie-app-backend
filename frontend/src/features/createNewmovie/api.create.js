import axios from "axios";
const api = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true
});
export async function createMovieApi(title, poster_path, trailer_youtube_link, description, release_date, genre, category, vote_average) {
    try {
        const response = await api.post('/create/movie', { title, poster_path, trailer_youtube_link, description, release_date, genre, category, vote_average });
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