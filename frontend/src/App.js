import './App.css';
import { React, useState } from 'react'

import UserContext from './UserContext';

import AppRoutes from './AppRoutes';

function App() {
    const [user, setUser] = useState(false)

    const authenticate = (key) => {
        if(typeof(key, String)){
            setUser(true)
            return true
        }
        return false
    }

    return (
        <div className='app-wrapper'>
            <AppRoutes/>
        </div>
    )
  // return (
  //     <Jobly />
  // );
}

export default App;
