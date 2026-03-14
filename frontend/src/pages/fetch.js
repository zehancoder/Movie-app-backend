import axios from "axios"

export const fetches = async (category, page) => {
    const response = await axios(`https://api.themoviedb.org/3/movie/${category}?api_key=1a05bd3a661c3ad18b28dfdde27416e8&page=${page}`);
    return response.data;
}