import React from 'react'
import { Routes, Route } from 'react-router'
import Register from '../features/auth/Register'
import Login from '../features/auth/Login'
import CreateMovie from '../features/createNewmovie/CreateMovie'
import Mainpage from '../pages/landing/Mainpage'
import MovieMain from '../pages/movie/MovieMain'
import Users from '../features/admin/pages/Users'

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
            <Route path='/admin/users' element={<Users />} />

        </Routes>
    )
}

export default Routing