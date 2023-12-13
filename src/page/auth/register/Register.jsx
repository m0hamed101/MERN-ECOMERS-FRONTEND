import React, { useState } from 'react'
import { useSignup } from "../form/formhook/useSignup"

import './register.css'
import registerimg from '../../../Assets/auth/signup-image.jpg'
import { Link } from 'react-router-dom'
export const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup, error, isLoading } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }

  return (
    <div className='register_contaner'>
      <div className="register_maindiv">
      <div className="sigupdivimg">
          <img src={registerimg} alt="" />
          <Link style={{ fontSize: '20px', textDecoration: 'none', margin: '40px' }} to={'/login'}>I am already member</Link>
        </div>
        <div>
          <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
            <div>
              <label>Email to :</label>

              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div>
              <label>Password </label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <button disabled={isLoading}>Sign up</button>
            {error && <div style={{color:'red'}} className="error">error</div>}
          </form>
        </div>
      </div>
    </div>
  )
}
