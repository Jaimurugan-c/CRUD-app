import React from 'react'
import { Link } from 'react-router-dom'

const User = () => {
  return (
    <div className='d-flex vh-100 
    justify-content-center bg-primary align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
      </div>
    </div>
  )
}

export default User
