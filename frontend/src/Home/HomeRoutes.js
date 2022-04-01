import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import WelcomePage from './WelcomePage'
import Companies from './Companies'
import Jobs from './Jobs'
import Profile from './Profile'
import Users from './Users'
import NotFound from '../NotFound'

function HomeRoutes(data) {
    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    path='/' 
                    element={<WelcomePage />} 
                    />
                <Route 
                    path='companies' 
                    element={<Companies companies={data}/>}>
                    <Route 
                        path=':handle' 
                        element={<Companies />}
                    />
                </Route>
                <Route 
                    path='jobs' 
                    element={<Jobs jobs={data}/>}
                />
                <Route 
                    path='users' 
                    element={<Users users={data}/>}
                />
                <Route 
                    path='profile' 
                    element={<Profile />}
                />
                <Route 
                    path='*' 
                    element={<NotFound />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default HomeRoutes