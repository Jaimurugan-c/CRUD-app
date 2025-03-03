import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate()

  const Submit = (e) => {
    e.preventDefault();
    
    axios.post("http://localhost:3001/createuser", { name, email, age })
      .then((result) => {
        console.log("User Created:", result.data);
        alert("User Created Successfully!");
        navigate('/')
      })
      .catch((err) => {
        console.error("Error Creating User:", err);
        alert("Error Creating User!");
      });
  };

  return (
    <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
      <div className="w-50 bg-white rounded p-4 shadow">
        <h3 className="text-center mb-4">Add User</h3>
        <form onSubmit={Submit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder='Enter Name' 
              className='form-control' 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder='Enter Email' 
              className='form-control' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input 
              type="number" 
              id="age" 
              placeholder='Enter Age' 
              className='form-control' 
              value={age} 
              onChange={(e) => setAge(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className='btn btn-success w-100'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
