import styles from './PostDetails.css'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import * as postService from '../services/postService'
import PostCard from '../components/PostCard/PostCard'
import PostActions from '../components/Post/PostActions'
import { Link } from 'react-router-dom'
import { deletePost } from '../services/postService'
import CommentSection from '../components/Comment/CommentSection'


const PostDetails = (props) => {
  const [post, setPost] = useState()
  const [comments, setComments] = useState([])
  // const [comments, setComments] = useState([])
  const { id } = useParams()
  const navigate = useNavigate()

  

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await postService.getPostById(id)
        setPost(postData)
      } catch (error) {
        throw error
      }
    }
    fetchPost()
  }, [id])

  useEffect(() => {
    if(post) {
    const fetchPost = async () => {
      try {
        
        setComments(post.comments)
      } catch (error) {
        throw error
      }
    }
    fetchPost()
  }
  }, [post])



  return (
    <div className="layout">
      
      <div className="post-details">
      <div className='edit-delete'><div><Link
          
          to='/edit'
          state={{post}}
        ><button className='btn btn-sm btn-warning'>edit </button></Link>
        </div>
        <div>
      <button className="btn btn-danger"
        onClick={() => props.handleDeletePost(post._id)}
      >Delete</button>
      </div>
      </div>
        {post && <PostCard post={post} />}
        <PostActions {...props}/>
        <CommentSection     
          post={post}
          setPost={setPost}
          comments={comments}
          setComments={setComments}
        />
        
      </div>

      

    </div>

  );
}

export default PostDetails;


