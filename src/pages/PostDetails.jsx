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

  const handleDeletePost = async (postId) => {
    console.log('oneParamId', postId)
    try {
      await deletePost(postId)
      //filter through postsState, only return the posts
      //where _id does not match postId
      setPost(post.filter((post) => post._id !== post._id))
    } catch (error) {
      throw error
    }
  }

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
        <h3>Testing</h3>
        {post && <PostCard post={post} />}
      </div>

      <div>
      <button
        onClick={() => handleDeletePost(post._id)}
      >Delete Post</button>
      </div>

    </div>

  );
}

export default PostDetails;
