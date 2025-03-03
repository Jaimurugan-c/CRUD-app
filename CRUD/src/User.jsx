import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


const User = () => {
  const [users,setUsers] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001')
    .then(result => setUsers(result.data))
    .catch(err =>console.log(err))
  },[])
  return (
    <div className='d-flex vh-100 justify-content-center bg-primary align-items-center'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-8 col-lg-6 bg-white rounded p-3' style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
             <Link to='/create' className='btn btn-success mb-3'>Add New</Link>
      
            <table className='table'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  return <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>
                      <Link to='/update' className='btn btn-warning'>Edit</Link>
                      <button className='bg-danger btn text-light'>Delete</button>
                    </td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
