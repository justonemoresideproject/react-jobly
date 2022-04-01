import './Auth.css'

import React from 'react';
import JoblyApi from '../api.js'
import { useNavigate } from 'react-router'
import { useState, useContext } from 'react'
import UserContext from '../UserContext.js';

function Login() {
    const INITIAL_STATE = {}
    const [formData, setFormData] = useState(INITIAL_STATE)
    const { user, authenticate } = useContext(UserContext)
    const [errorMessage, setErrorMessage] = useState()

    let navigate = useNavigate()
    let opacity = 0

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let res = JoblyApi.login(formData)
        if(!authenticate(res)){
            handleErrorMessage(res)
        }
        return navigate(`/home`)
    }

    const handleErrorMessage = (error) => {
        setErrorMessage(error)
        opacity = 99;
    }

    return (
        <div>
            <h1 className='Nav-h1'>Log In</h1>
            <form className='auth-form' id='login-form'>
                <div className="auth-input-wrapper">
                    <label
                        className='auth-label'
                        id='login-label-username' 
                        htmlFor='username'>
                            Username
                    </label>
                    <input 
                        className='auth-input'
                        type='text' 
                        id='login-input-username' 
                        name='username' 
                        placeholder='myExampleUsername'
                        value={formData.username} 
                        onChange={handleChange}>
                    </input>
                </div>
                <div className="auth-input-wrapper">
                    <label
                        className='auth-label'
                        id='login-label-password' 
                        htmlFor='password'>
                            Password
                    </label>
                    <input
                        type='password'
                        className='auth-input'
                        id='login-input-password' 
                        name='password' 
                        placeholder='secrets' 
                        value={formData.password} 
                        onChange={handleChange}>
                    </input>
                </div>

                <button 
                    className='auth-button'
                    id='login-submit' onClick={handleSubmit}>Submit</button>

                <p id='error-message' style={{
                    color: `255, 255, 255, 0.${opacity}`
                    }}>{errorMessage}</p>
            </form>
        </div>
    )
}

export default Login;