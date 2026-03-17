import axios from "axios"

export const videoFetcher = async (videoId) => {
    const response =await axios(`https://api.themoviedb.org/3/movie/${videoId}/videos?api_key=1a05bd3a661c3ad18b28dfdde27416e8&language=en-US`);
    return response.data

}