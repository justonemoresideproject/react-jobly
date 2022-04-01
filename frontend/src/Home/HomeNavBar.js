import './Home.css'

import React from 'react';
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from 'react-router-dom';
import JoblyApi from '../api';

function HomeNavBar(changeData) {
    return (
        <Navbar className='NavBar' expand='md'>
            <NavItem className='brand-wrapper'>
                <Link 
                    to='home/welcome' className='navbar-brand'>
                    Jobly
                </Link>
            </NavItem>
            <NavItem className='resource-wrapper'>
                <Link 
                    to='home/companies'
                    className='navbar-link'
                    onClick={changeData(JoblyApi.getAllCompanies())}
                >
                    Companies
                </Link>
                <Link 
                    to='home/jobs'
                    className='navbar-link'
                    onClick={changeData(JoblyApi.getAllJobs())}
                >
                    Jobs
                </Link>
                <Link 
                    to='home/users'
                    className='navbar-link'
                    onClick={changeData(JoblyApi.getAllUsers())}
                >
                    Users
                </Link>
                <Link 
                    to='home/profiles'
                    className='navbar-link'
                >
                    Profile
                </Link>
            </NavItem>
        </Navbar>
    )
}

export default HomeNavBar