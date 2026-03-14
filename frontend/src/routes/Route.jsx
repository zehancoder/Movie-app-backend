import React from 'react'
import { Routes, Route } from 'react-router'
import Register from '../features/auth/Register'
import Login from '../features/auth/Login'
import CreateMovie from '../features/createNewmovie/CreateMovie'
import Mainpage from '../pages/landing/Mainpage'

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Mainpage/>}/>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/create/new/movie' element={<CreateMovie />} />
            
        </Routes>
    )
}

export default Routing