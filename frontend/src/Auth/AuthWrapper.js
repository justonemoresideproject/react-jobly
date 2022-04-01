import React from 'react'
import { Outlet } from 'react-router'
import AuthNavBar from './AuthNavBar'

function AuthWrapper() {
    return (
        <>
            <AuthNavBar />
            <Outlet />
        </>
    )
}

export default AuthWrapper