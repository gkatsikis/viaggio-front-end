import styles from './PostCard.css'
import { Link } from 'react-router-dom'


const PostCard = ({post}) => {
  
  return (  
  <div>
    <img src={post.postPhoto ? post.postPhoto : `https://i.imgur.com/saIoSZF.jpeg`}alt="unhappy child canoing"
        />
  </div>
    
    
    
  
    
    );
  }
  
  export default PostCard;
  
  // <div className='card-title'><h2 className="card-text">{post.title}</h2></div>
// <Link
//       className="post-card"
//       to={`/post/${post._id}`}
//       >
        // <img 
        // src={post.postPhoto ? post.postPhoto : `https://i.imgur.com/saIoSZF.jpeg`}
        // alt="unhappy child canoing"
        // className="card-img-top"
        // />
//       </Link>

// <h2 className="card-text">{post.title}</h2>