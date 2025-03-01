import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import User from './User'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
             <Route path='/' element={<User/>}/>
             <Route path='/create' element={<CreateUser/>}/>
           <Route path='/update' element={<UpdateUser/>}></Route>
      </Routes>
     </BrowserRouter>
         </div>
  )
}

export default App
