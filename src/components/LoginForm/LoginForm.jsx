import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './LoginForm.css'
import * as authService from '../../services/authService'

const LoginForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  })
  const navigate = useNavigate()

  const handleChange = e => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  return (
    <div class="card">
      <div className='login-title'><h3>Log in</h3></div>
  <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      
    <div className="email-login">
    <label htmlFor="email" className={styles.label}>Email</label>
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
        <label htmlFor="password" className={styles.label}>Password</label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={formData.pw}
          name="password"
          onChange={handleChange}
        />
      </div>
      <button className="cta-btn">Log In</button>
      Dont have an account?
      <Link to='/signup'>Sign up</Link>
  </form>
  </div>

    
  )
}

export default LoginForm
