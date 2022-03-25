import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import * as postService from '../services/postService'
import PostCard from '../components/PostCard/PostCard'


const PostDetails = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  console.log('Post Details Params', id)

  return (  
    <>
    <h1>Post Details</h1>
    </>

  );
}

export default PostDetails;
