import React from 'react'

const CreateUser = () => {
  return (
    <div className='d-flex vh-100 justify-content-center bg-primary align-items-center'>
      <div className="w-50 bg-white rounded p-4 shadow">
        <form>
          <h3 className="text-center mb-4">Add User</h3>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" placeholder='Enter Name' className='form-control'/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" placeholder='Enter Email' className='form-control'/>
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input type="number" id="age" placeholder='Enter Age' className='form-control'/>
          </div>
          <button type="submit" className='btn btn-success w-100'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateUser
