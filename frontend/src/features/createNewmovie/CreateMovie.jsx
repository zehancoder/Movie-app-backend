import axios from 'axios';
import React, { useState } from 'react';

function CreateMovie() {

    const [formData, setFormData] = useState({
        title: '',
        img_url: '',
        trailer_youtube_link: '',
        description: '',
        release_date: '',
        genre: '',
        category: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const { title, img_url, trailer_youtube_link, description, release_date, genre, category } = formData;
    console.log(title, img_url);

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/create/movie', { title, img_url, trailer_youtube_link, description, release_date, genre, category }, { withCredentials: true }).then((res) => console.log(res.data)).catch((error) => alert(error.response.data.message));
        setFormData({
            title: '',
            img_url: '',
            trailer_youtube_link: '',
            description: '',
            release_date: '',
            genre: '',
            category: ''
        })
    }
    return (
        <div className='h-screen flex items-center justify-center '>
            <div className="w-[95%] sm:max-w-2xl mx-auto md:mt-8 mt-6 lg:mt-10 md:p-6 p-4 lg:p-8 bg-[#cecece8a] shadow-lg rounded-lg border border-gray-200">
                <h2 className=" md:text-xl text-lg lg:text-2xl font-bold md:mb-4 mb-2 lg:mb-6 text-gray-800 text-center">Add New Movie</h2>

                {message && (
                    <p className={`mb-4 p-2 text-center rounded ${message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {message}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Title */}
                    <div>
                        <label className="block text-[13px] md:text-sm font-medium text-gray-700">Movie Title</label>
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
                            <label className="block text-[13px] md:text-sm font-medium text-gray-700">Image URL</label>
                            <input
                                type="text"
                                name="img_url"
                                required
                                value={formData.img_url}
                                onChange={handleChange}
                                className="mt-1 block w-full border md:text-base text-[14.8px] border-gray-300 rounded-md p-1 md:p-2 shadow-sm"
                                placeholder="https://image-link.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Release Date</label>
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
                        <label className="block text-[13px] md:text-sm font-medium text-gray-700">Trailer YouTube Link</label>
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
                            <label className="block text-[13px] md:text-sm font-medium text-gray-700">Genre</label>
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
                            <label className="block text-[13px] md:text-sm font-medium text-gray-700">Category</label>
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
                        <label className="block text-[13px] md:text-sm font-medium text-gray-700">Description</label>
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
                        Add Movie
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateMovie;