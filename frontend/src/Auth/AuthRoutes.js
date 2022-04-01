import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Auth from './Auth'
import Login from './Login'
import Register from './Register'

import NotFound from '../NotFound'

function AuthRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    path='/' 
                    element={<Auth />}
                />
                <Route
                    path='register'
                    element={<Register />}
                />
                <Route
                    path='login'
                    element={<Login />}
                />
                <Route 
                    path='*'
                    element={<NotFound />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default AuthRoutes