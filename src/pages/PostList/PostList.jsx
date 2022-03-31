import styles from './PostList.css'
import PostCard from '../../components/PostCard/PostCard';

const PostList = (props) => {
  return (  
    <>  
    <div className="full-container">
    {props.posts.map(post =>
          <PostCard key={post._id} post={post}/> 
        )}
      </div>
    </>
  );
}

export default PostList;