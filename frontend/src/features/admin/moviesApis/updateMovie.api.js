import axios from "axios";
export const updateMovie = async (
  movieId,
  title,
  poster_path,
  trailer_youtube_link,
  description,
  release_date,
  genre,
  category,
  vote_average,
) => {
  try {
    const response = await axios.patch(
      `https://movie-app-backend-szlu.onrender.com/movies/update/${movieId}`,
      {
        title,
        poster_path,
        trailer_youtube_link,
        description,
        release_date,
        genre,
        category,
        vote_average,
      },
      {
        withCredentials: true,
      },
    );
    return {
      success: true,
      data: response.data,
      message: response.data.message,
    };
  } catch (error) {
    return {
      success: false,
      message: error.response.data.message,
    };
  }
};
