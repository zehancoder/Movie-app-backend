import axios from "axios"

export const searchData = async (query, page) => {
    try {
        const response = await axios(`https://api.themoviedb.org/3/search/movie?api_key=1a05bd3a661c3ad18b28dfdde27416e8&query=${query}&page=${page}`);
        return {success: true, data: response.data };
    } catch (error) {
        return {
            success: false,
        }
    }

}