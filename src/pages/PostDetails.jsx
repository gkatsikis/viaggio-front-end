import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import * as postService from '../services/postService'
import PostCard from '../components/PostCard/PostCard'
import PostActions from '../components/Post/PostActions'
import { Link } from 'react-router-dom'
// import { update } from '../services/postService'


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
        console.log('TEST:',postData, id)
        setPost(postData)
        // setComments(postData.comments)
      } catch (error) {
        throw error
      }
    }
    fetchPost()
  }, [id])

  // const handleUpdatePost = updatedPostData => {
  //   postService.update(updatedPostData)
  //   .then(updatedPost => {
  //     const newPostArray = post.map(post => post._id === updatedPost._id ? updatedPost : post)
  //     setPost(newPostArray)
  //     navigate('/')
  //   })
  // }



  return (
    <div className="layout">
      <div className="post-details">
        <h3>Testing</h3>
        {post && <PostCard post={post} />}
        <PostActions {...props}/>
        <Link
          className='btn btn-sm btn-warning'
          to='/edit'
          state={{post}}
        >Edit</Link>
      </div>
    </div>

  );
}

export default PostDetails;