import React from 'react'
import JoblyApi from '../api'

function Users(users) {
    return (
        <div>
            {users.map(user => {
                return(
                <div className='Users-list-card'>
                    <h2 className='Users-list-username'>{user.username}</h2>
                    <h3 className='Users-list-firstLast'>{user.firstName} {user.lastName}</h3>
                    <span className='Users-list-email'>{user.email}</span>
                </div>
                )
            })}
        </div>
    )
}

export default Users