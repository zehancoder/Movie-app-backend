import axios from "axios"

export const fetchWithGenre = async (genre, page) => {
    const response = await axios(`https://api.themoviedb.org/3/discover/movie?api_key=1a05bd3a661c3ad18b28dfdde27416e8&with_genres=${genre}&page=${page}`);
    return response.data;
}