import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        // <nav>
        //   <ul>
        //     <li>Welcome, {user.name}</li>
        //     <li><Link to="/profiles">Profiles</Link></li>
        //     <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
        //     <li><Link to="/changePassword">Change Password</Link></li>
        //     <li><Link to="/addpost">add post</Link></li>
        //   </ul>
        // </nav>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link className="nav-link" to="/profiles">Profiles</Link>
      </li>
      
      <li className="nav-item">
      <Link className="nav-link" to="" onClick={handleLogout}>Log Out</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/changePassword">Change Password</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/addpost">Add post</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/createBucketList">Create Bucket List</Link>
      </li>
    </ul>
  </div>
</nav>
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


