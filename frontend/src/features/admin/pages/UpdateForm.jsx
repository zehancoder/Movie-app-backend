import React, { useState } from "react";
import { updateMovie } from "../moviesApis/updateMovie.api";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { adminMoviesState, errorMsgState } from "../../../toolkit/slice";
import { movieApi } from "../moviesApis/movie.api";

function UpdateForm({ data, setUpdateMovieId }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: data.title,
    poster_path: data.poster_path,
    trailer_youtube_link: data.trailer_youtube_link,
    description: data.description,
    release_date: data.release_date,
    genre: data.genre,
    category: data.category,
    vote_average: data.vote_average,
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // update handle
  const adminMovies = useSelector((state) => state.adminMovies);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await updateMovie(
      data.movieId,
      formData.title,
      formData.poster_path,
      formData.trailer_youtube_link,
      formData.description,
      formData.release_date,
      formData.genre,
      formData.category,
      formData.vote_average,
    );
    if (!response.success) {
      dispatch(errorMsgState(response.message));
      return;
    }
    dispatch(errorMsgState(response.message));
    const response2 = await movieApi();
    dispatch(adminMoviesState(response2.data.movies));
    setUpdateMovieId({});
  };
  return (
    <div>
      <IoClose
        onClick={() => setUpdateMovieId({})}
        className=" cursor-pointer absolute top-3 right-3 text-2xl text-gray-800"
      />
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-[13px] md:text-sm font-medium text-gray-700">
            Movie Title
          </label>
          <input
            type="text"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full border md:text-base text-[14.8px] border-gray-300 rounded-md p-1 md:p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter movie title"
          />
        </div>

        {/* Image URL & Release Date */}
        <div className="grid grid-cols-2 gap-2 md:gap-4">
          <div>
            <label className="block text-[13px] md:text-sm font-medium text-gray-700">
              Poster Path
            </label>
            <input
              type="text"
              name="poster_path"
              required
              value={formData.poster_path}
              onChange={handleChange}
              className="mt-1 block w-full border md:text-base text-[14.8px] border-gray-300 rounded-md p-1 md:p-2 shadow-sm"
              placeholder="https://image-link.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Release Date
            </label>
            <input
              type="date"
              name="release_date"
              required
              value={formData.release_date}
              onChange={handleChange}
              className="mt-1 block w-full border md:text-base text-[14.8px] border-gray-300 rounded-md p-1 md:p-2 shadow-sm"
            />
          </div>
        </div>

        {/* Youtube Link */}
        <div>
          <label className="block text-[13px] md:text-sm font-medium text-gray-700">
            Trailer YouTube Link
          </label>
          <input
            type="url"
            name="trailer_youtube_link"
            required
            value={formData.trailer_youtube_link}
            onChange={handleChange}
            className="mt-1 block w-full border md:text-base text-[14.8px] border-gray-300 rounded-md p-1 md:p-2 shadow-sm"
            placeholder="https://youtube.com/..."
          />
        </div>

        {/* Genre & Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[13px] md:text-sm font-medium text-gray-700">
              Genre
            </label>
            <input
              type="text"
              name="genre"
              required
              value={formData.genre}
              onChange={handleChange}
              className="mt-1 block w-full border md:text-base text-[14.8px] border-gray-300 rounded-md p-1 md:p-2 shadow-sm"
              placeholder="Action, Drama, etc."
            />
          </div>
          <div>
            <label className="block text-[13px] md:text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              name="category"
              required
              value={formData.category}
              onChange={handleChange}
              className="mt-1 block w-full border md:text-base text-[14.8px] border-gray-300 rounded-md p-1 md:p-2 shadow-sm"
            >
              <option value="">Select Category</option>
              <option value="Trending">Trending</option>
              <option value="Popular">Popular</option>
              <option value="New Release">New Release</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-[13px] md:text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            required
            rows="4"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 md:text-base text-[14.8px] md:h-auto h-[80px] block w-full border border-gray-300 rounded-md p-1 md:p-2 shadow-sm"
            placeholder="Write a short summary..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-1.5 md:text-base text-[14px] md:py-2 px-2 md:px-4 rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
        >
          Update Movie
        </button>
      </form>
    </div>
  );
}

export default UpdateForm;
