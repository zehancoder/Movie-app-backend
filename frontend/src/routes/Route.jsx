import React from 'react'
import { Routes, Route } from 'react-router'
import Register from '../features/auth/Register'
import Login from '../features/auth/Login'
import CreateMovie from '../features/createNewmovie/CreateMovie'

const Routing = () => {
    return (
        <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/create/new/movie' element={<CreateMovie />} />

        </Routes>
    )
}

export default Routing