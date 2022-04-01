import React from 'react';
import { useContext } from 'react';
import UserContext from '../UserContext';

function WelcomePage() {
    const {user} = useContext(UserContext)
    return (
        <div>
            <h1>Test</h1>
            Welcome {user.username}
        </div>
    )
}

export default WelcomePage