import React from 'react'
import JoblyApi from '../api'

function Jobs(jobs) {
    return (
        <div>
            <h2>Jobs</h2>
            {jobs.map(job => {
                return (
                    <div className='Jobs-list-card'>
                        <h3 className='Jobs-list-name'>
                            {job.title}
                        </h3>
                        <h4 className='Jobs-list-companyName'>{job.companyName}: 
                        <span className='Jobs-list-companyHandle'>{job.companyHandle}</span></h4>
                        <ul className='Jobs-list-ul'>
                            <li className='Jobs-list-li'>
                                Salary: {job.salary}
                            </li>
                            <li className='Jobs-list-li'>
                                Equity: {job.equity}
                            </li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default Jobs