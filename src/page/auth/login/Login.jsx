import React, { useState } from 'react'
import { useLogin } from "../form/formhook/useLogin"


import '../register/register.css'
import Loginimg from '../../../Assets/auth/signin-image.jpg'
import { Link } from 'react-router-dom'
export const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isLoading } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }


  return (
    <div className='register_contaner'>
      <div className="register_maindiv">
      <div className="sigupdivimg">
          <img src={Loginimg} alt="" />
          <Link style={{ fontSize: '20px', textDecoration: 'none', margin: '40px' }} to={'/register'}>Create an account</Link>
        </div>

        <div>
          <form className="login" onSubmit={handleSubmit}>
            <h3>Log In</h3>
            <div style={{border:'solid 1px',borderRadius:"25px",padding:"5px 50px",width:"fit-content"}}>
            <h6> test Email : account@account.com</h6>
            <h6>test Password : account@account.com</h6>
            </div>

            <label>Email address:</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label>Password:</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <button disabled={isLoading}>Log in</button>
            {error && <div className="error">{error}</div>}
          </form>
        </div>

        
      </div>


    </div>
  )
}
