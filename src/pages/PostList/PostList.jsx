import styles from './PostList.css'
import PostCard from '../../components/PostCard/PostCard';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


const PostList = (props) => {
  const navigate = useNavigate()

  useEffect(() => {
    !props.user && navigate('/signup')
  }, [props.user])

  console.log('Yellow', props.post)
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