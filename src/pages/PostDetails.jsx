import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import * as postService from '../services/postService'
import PostCard from '../components/PostCard/PostCard'
import { deletePost } from '../services/postService'


const PostDetails = (props) => {
  const [post, setPost] = useState()
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
