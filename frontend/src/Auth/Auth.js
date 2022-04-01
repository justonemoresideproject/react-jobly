import React from 'react';
import './Auth.css'

import { Nav, NavItem, NavLink } from "reactstrap";
import { useContext } from 'react'
import UserContext from '../UserContext';
import { Link } from 'react-router-dom'

function Auth() { 
    return (
        <>
            <h1 className='Nav-h1'>Welcome to Jobly</h1>
            <Nav>
                <Link className='Nav-login-button' to='login'>Login</Link>
                <Link className='Nav-register-button' to='register'>Register</Link>
            </Nav>
        </>
    )
}

export default Auth;