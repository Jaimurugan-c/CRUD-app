import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const User = () => {
  const [users,setUsers] = useState([{
    Name: 'Jai', Email:'Jai@gmail.com', Age: 20
  }])
  return (
    <div className='d-flex vh-100 justify-content-center bg-primary align-items-center'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-8 
          col-lg-6 bg-white rounded p-3'>
             <Link to= '/create' className='btn btn-success'
             >Add New</Link>
      
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
                  return <tr>
                    <td>{user.Name}</td>
                    <td>{user.Email}</td>
                    <td>{user.Age}</td>
                    <td><button className='bg-warning
                    btn  text-darkt '>Edit</button>
                    <button className='bg-danger btn   text-light'>Delete</button>
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
