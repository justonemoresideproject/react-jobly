import { React, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import UserContext from './UserContext';

import AuthWrapper from './Auth/AuthWrapper';
import Auth from './Auth/Auth';
import Login from './Auth/Login';
import Register from './Auth/Register';

import HomeWrapper from './Home/HomeWrapper';
import WelcomePage from './Home/WelcomePage';
import Companies from './Home/Companies';
import Jobs from './Home/Jobs';
import Profile from './Home/Profile';
import Users from './Home/Users';
import NotFound from './NotFound';

function AppRoutes() {
    const [user, setUser] = useState(false)

    const authenticate = (key) => {
        if(typeof(key, String)){
            setUser(true)
            return true
        }
        return false
    }

    return (
        <UserContext.Provider value={{user, authenticate}}>
            <BrowserRouter>
                <Routes>
                    {!user && (
                        <Route
                            path='/'
                            element={<AuthWrapper />}
                        >
                            <Route
                                index element={<Auth />}
                            />
                            <Route
                                path='login'
                                element={<Login />}
                            />
                            <Route
                                path='register'
                                element={<Register />}
                            />
                    </Route>
                    )}
                    {user && (
                        <Route
                            path='home'
                            element={<HomeWrapper />}
                        >
                            <Route
                                index element={<WelcomePage />}
                            />
                            <Route 
                                path='jobs'
                                element={<Jobs />}
                            />
                            <Route
                                path='companies'
                                element={<Companies />}
                            />
                            <Route
                                path='users'
                                element={<Users />}
                            />
                            <Route
                                path='profile'
                                element={<Profile />}
                            />
                        </Route>
                    )}
                    <Route 
                        path='*'
                        element={<NotFound />}
                    />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

export default AppRoutes