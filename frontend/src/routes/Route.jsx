import React from 'react'
import { Routes, Route } from 'react-router'
import Register from '../features/auth/Register'
import Login from '../features/auth/Login'
import CreateMovie from '../features/createNewmovie/CreateMovie'
import Mainpage from '../pages/landing/Mainpage'
import MovieMain from '../pages/movie/MovieMain'

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route path="/movies">
                <Route index element={<MovieMain />} />
                <Route path="create" element={<CreateMovie />} />
            </Route>
        </Routes>
    )
}

export default Routing