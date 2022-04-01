import "./Auth.css"

import React from 'react';
import JoblyApi from '../api.js'
import { useNavigate } from 'react-router-dom'
import UserContext from '../UserContext.js';
import { useState, useContext } from 'react'

function Register() {
    const INITIAL_STATE = {}
    const [formData, setFormData] = useState(INITIAL_STATE)
    const { user, setUser } = useContext(UserContext)
    const [errorMessage, setErrorMessage] = useState()

    // I can set opacity to 99 then useEffect it down to 0
    let opacity = 0
    let navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let res = JoblyApi.register(formData)
        if(typeof(res, Error)){
            handleErrorMessage(res)
        }
        formData.apiKey = res
        setUser(true)
        return navigate(`/`)
    }

    const handleErrorMessage = (error) => {
        setErrorMessage(error)
        opacity = 99;
    }


    return (
        <>
        <h1 className='Nav-h1'>Sign Up</h1>
    <form className="auth-form">
        <div className="auth-input-wrapper">
            <label
                className='auth-label'
                id='auth-label-username' 
                htmlFor='username'>
                    Username
            </label>
            <input 
                className='auth-input'
                type='text' 
                id='auth-input-username' 
                name='username' 
                placeholder='myExampleUsername' 
                value={formData.username} 
                onChange={handleChange}>
            </input>
        </div>

        <div className="auth-input-wrapper">
            <label 
                className='auth-label'
                id='auth-label-password' 
                htmlFor='password'>
                    Password
            </label>
            <input 
                className='auth-input'
                type='password' 
                id='auth-input-password' 
                name='password' 
                placeholder='***********' 
                value={formData.password} 
                onChange={handleChange}>
            </input>
        </div>

        <div className="auth-input-wrapper">
            <label 
                className='auth-label'
                id='auth-label-first' 
                htmlFor='firstName'>
                    First Name
            </label>
            <input 
                className='auth-input'
                type='text' 
                id='auth-input-first' 
                name='firstName' 
                placeholder='Jimothy' 
                value={formData.first} 
                onChange={handleChange}>
            </input>
        </div>

        <div className="auth-input-wrapper">
            <label 
                className='auth-label'
                id='auth-label-last' 
                htmlFor='lastName'>
                    Last Name
            </label>
            <input 
                className='auth-input'
                type='text' 
                id='auth-input-last'
                name='lastName' 
                placeholder='Katz' 
                value={formData.last} 
                onChange={handleChange}>
            </input>
        </div>

        <div className="auth-input-wrapper">
            <label
                className='auth-label'
                id='auth-label-email' 
                htmlFor='email'>
                    Email
            </label>
            <input 
                className='auth-input'
                type='text' 
                id='auth-input-email' 
                name='email' 
                placeholder='notReal@fakemail.com' 
                value={formData.email} onChange={handleChange}>
            </input>
        </div>

        <button 
            className='auth-button'
            id='register-submit' 
            onClick={handleSubmit}>
                        Submit
        </button>

        <p 
            id='error-message' 
            style={
                {
                    color: `255, 255, 255, 0.${opacity}`
                }}>
                    {errorMessage}
        </p>
    </form>
    </>
    )
}

export default Register;