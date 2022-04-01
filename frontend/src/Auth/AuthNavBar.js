import React from 'react';
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

function AuthNavBar() {
    return (
        <div>
            <Navbar expand='md'>
                <NavItem>
                    <NavLink
                        to='/'
                        className='navbar-brand'
                    >
                        Jobly
                    </NavLink>
                </NavItem>

                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <NavLink
                            to='/login'
                        >
                            Login
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            to='/register'
                        >
                            Sign Up
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}