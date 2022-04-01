import React from 'react'
import JoblyApi from '../api'

function Companies(companies) {
    return (
        <div>
            <h2>Companies</h2>
            {companies.map(company => {
                return (
                    <div className='Companies-list-card'>
                        <h3 className='Companies-list-name'>{company.name} </h3>
                        <h5 className='Companies-list-handle'>{company.handle} </h5>
                        <h5 className='Companies-list-numEmployees'>Employees: {company.numEmployees} </h5>
                        <p className='Companies-list-description'>{company.description} </p>
                        <span className='Companies-list-logoUrl'>Logo URL: {company.logoUrl} </span>
                    </div>
                )
            })}
        </div>
    )
}

export default Companies