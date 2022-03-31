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
    <div className="global-container">
	<div className="card login-form">
	<div className="card-body">
		<h3 className="card-title text-center">Log in to Codepen</h3>
		<div className="card-text">
		
			<div className="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> 
			<form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
				
				<div className="form-group">
        <label htmlFor="email" className={styles.label}>Email</label>
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
				</div>
				<div className="form-group">
        <label htmlFor="password" className={styles.label}>Password</label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={formData.pw}
          name="pw"
          onChange={handleChange}
        />
				</div>
				<button type="submit" className="btn btn-primary btn-block">Sign in</button>
				
				<div className="sign-up">
					Don't have an account? <Link to="/signup">sign u</Link>
				</div>
			</form>
		</div>
	</div>
</div>
</div>
    
    /* <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    > */
      /* <div className={styles.inputContainer}>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        /> */
      // </div>
      // <div className={styles.inputContainer}>
      //   <label htmlFor="password" className={styles.label}>Password</label>
      //   <input
      //     type="password"
      //     autoComplete="off"
      //     id="password"
      //     value={formData.pw}
      //     name="pw"
      //     onChange={handleChange}
      //   />
      // </div>
    //   <div>
    //     <button className={styles.button}>Log In</button>
    //     <Link to="/">
    //       <button>Cancel</button>
    //     </Link>
    //   </div>
    // </form>
  )
}

export default LoginForm
