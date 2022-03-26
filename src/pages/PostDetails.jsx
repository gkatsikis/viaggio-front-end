import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import * as postService from '../services/postService'
import PostCard from '../components/PostCard/PostCard'


const PostDetails = (props) => {
  const [post, setPost] = useState()
  // const [comments, setComments] = useState([])
  const { id } = useParams()
  const navigate = useNavigate()
  console.log('Post Details Params', id)

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
        <h3>{post.title}</h3>
      </div>
    </div>

  );
}

export default PostDetails;
