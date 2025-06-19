import React from 'react'
import {FaReact} from 'react-icons/fa6'
import '../style.css'

const UserLogin = () => {
  return (
    <div  className='login-container'>
        <div className='login-title'>
            <FaReact/>
            <h1>Chat App</h1>
        </div>
        <div className='login-form'>
            <input type="text" placeholder='Enter your name'/>
            <button>Login</button>
        </div>
    </div>

  )
}

export default UserLogin