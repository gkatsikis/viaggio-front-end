import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?

  <div className="navbar">
  <Link to="/"><i className="fa-solid fa-house"></i></Link>

  <Link to="/login"><i className="fa-solid fa-user"></i></Link>
  <Link to="/addPost"><i className="fa-solid fa-plus"></i></Link>
  <Link to="" onClick={handleLogout}><i className="fa-solid fa-arrow-right-from-bracket"></i></Link>
  <Link className="nav-link" to="/createBucketList"><i className="fa-solid fa-list"></i></Link>
  
  </div>
      :
        <nav>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>

        
      }
      
      
      
    </>
      
  )
}

export default NavBar


