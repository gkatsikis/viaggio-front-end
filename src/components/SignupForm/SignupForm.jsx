import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './SignupForm.css'
import * as authService from '../../services/authService'

const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: '',
    password: '',
    passwordConf: '',
  })

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { name, bio, email, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(name && bio && email && password && password === passwordConf)
  }

  return (
    
    <div className="card">
  <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
					<label htmlFor="name" className={styles.label}>Name</label>
					<input
          type="text"
          autoComplete="off"
          id="name"
          value={name}
          name="name"
          onChange={handleChange}
        />
        <label htmlFor="bio" className={styles.label}>Bio</label>
					<input
          type="text"
          autoComplete="off"
          id="bio"
          value={bio}
          name="bio"
          onChange={handleChange}
        />
        <label htmlFor="name" className={styles.label}>Email</label>
					<input
          type="text"
          autoComplete="off"
          id="email"
          value={email}
          name="email"
          onChange={handleChange}
        />
        <label htmlFor="name" className={styles.label}>Name</label>
        <input
          type="text"
          autoComplete="off"
          id="name"
          value={name}
          name="name"
          onChange={handleChange}
        />
        <label htmlFor="password" className={styles.label}>Password</label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={password}
          name="password"
          onChange={handleChange}
        />
        <label htmlFor="confirm" className={styles.label}>Confirm Password</label>
        <input
          type="password"
          autoComplete="off"
          id="confirm"
          value={passwordConf}
          name="passwordConf"
          onChange={handleChange}
        />
      </div>
      <button className="cta-btn" disabled={isFormInvalid}>Sign up</button>
      Have an account? 
      <Link to='/login'>Log in</Link>
  </form>
  </div>
    
  )
}

export default SignupForm


