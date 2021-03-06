import styles from './PostCard.css'
import { Link } from 'react-router-dom'


const PostCard = ({post}) => {
  
  return (  

    <Link
          className="post-card"
          to={`/post/${post._id}`}
          >
  <div className="main-container row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
      <div className="card">
      <img 
          src={post.postPhoto ? post.postPhoto : `https://i.imgur.com/saIoSZF.jpeg`}
          alt="unhappy child canoing"
          className="card-img-top"
          />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.story}</p>
        </div>
      </div>
    </div>
    </div>
    </Link>
  

    
    

  
    
);
}

  
  export default PostCard;
  
  