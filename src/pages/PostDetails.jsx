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
        // setComments(postData.comments)
      } catch (error) {
        throw error
      }
    }
    fetchPost()
  }, [id])


  return (
    <div className="layout">
      <div className="post-details">
        {post && <PostCard post={post} />}
        <PostActions {...props}/>
        <CommentSection     
          post={post}
          setPost={setPost}
          comments={comments}
          setComments={setComments}
        />
        <Link
          className='btn btn-sm btn-warning'
          to='/edit'
          state={{post}}
        >Edit</Link>
      </div>

      <div>
      <button
        onClick={() => props.handleDeletePost(post._id)}
      >Delete Post</button>
      </div>

    </div>

  );
}

export default PostDetails;
