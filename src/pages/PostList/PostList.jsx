import styles from './PostList.css'
import PostCard from '../../components/PostCard/PostCard';

const PostList = (props) => {
  
  return (  
    <>
    <h1>All Posts</h1>
    <div className={styles.container}>
    {props.posts.map(post =>
          <PostCard key={post._id} post={post}/>
    
        )}
      </div>
    </>
  );
}

export default PostList;