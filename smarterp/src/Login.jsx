import React, { Component } from 'react'
import './css/Login.css'
export default class Login extends Component {
  render() {
    return (
      <div className='login'>
      <div className='leftpanel'>
        <h2>Welcome to S201 ERP Project</h2>
        <p>Check all the ERP Options here</p>
      </div>
      <div className='rightpanel'>
        <div className='card'> 
            <input type='name' placeholder='Enter the username'></input>
            <input type='password' placeholder='Enter the password'></input>
            <button>Login</button>
            <p>Don't have an account?<span>Sign up</span></p>
        </div>
      </div>
      </div>
    )
  }
}
