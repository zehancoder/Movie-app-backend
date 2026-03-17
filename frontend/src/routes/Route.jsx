import React from "react";
import { Routes, Route } from "react-router";
import Register from "../features/auth/Register";
import Login from "../features/auth/Login";
import CreateMovie from "../features/createNewmovie/CreateMovie";
import Mainpage from "../pages/landing/Mainpage";
import MovieMain from "../pages/movie/MovieMain";
import Users from "../features/admin/pages/Users";
import Search from "../pages/search/Search.jsx";
import Movies from "../features/admin/pages/Movies.jsx";
import Player from "../pages/player/Player.jsx";
import Like from "../features/likeMovies/Like.jsx";
import About from "../pages/about/About.jsx";
import Contact from "../pages/contact/Contact.jsx";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/movie">
        <Route index element={<MovieMain />} />
      </Route>
      <Route path="/create/new/movie" element={<CreateMovie />} />
      <Route path="/admin/users" element={<Users />} />
      <Route path="/search" element={<Search />} />
      <Route path="/admin/movies" element={<Movies />} />
      <Route path="/movies/vedio/:id" element={<Player />} />
      <Route path="/profile/like" element={<Like />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routing;
