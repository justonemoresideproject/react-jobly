import './Home.css'

import React from 'react';
import HomeNavBar from './HomeNavBar'
import { useState, useContext } from 'react'

import { Outlet } from 'react-router';
import UserContext from '../UserContext';


function HomeWrapper() {
    const [data, setData] = useState([])
    const changeData = (apiMethod) => {
        setData([])
        setData(apiMethod)
    }
    return (
        <div>
            <div className='home-nav-wrapper'>
                <HomeNavBar changeData={changeData}/>
            </div>
            <div className='home-route-wrapper'>
                <Outlet />
            </div>
        </div>
    )
}

export default HomeWrapper