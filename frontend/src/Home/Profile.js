import React from 'react'
import JoblyApi from '../api'
import { useState, useContext } from 'react';
import UserContext from '../UserContext';

function Profile(){
    const {user, setUser} = useContext(UserContext)
    const [formData, setFormData] = useState(user)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        JoblyApi.updateUser(user, formData)
        setUser(formData)
    }

    return (
        <div>
            <label htmlFor='username' className='profile-label-username'>Username</label>
            <input type='text' name='username' value={formData.username} onChange={handleChange} />

            <label htmlFor='first' className='profile-label-first'>First Name</label>
            <input type='text' name='first' value={formData.first} onChange={handleChange} />

            <label htmlFor='last' className='profile-label-first'>Last Name</label>
            <input type='text' name='last' value={formData.last} onChange={handleChange} />

            <label htmlFor='email' className='profile-label-email'>Email</label>
            <input type='text' name='email' value={formData.email} onChange={handleChange} />

            <button onClick={handleSubmit()}>Submit</button>
        </div>
    )
}

export default Profile