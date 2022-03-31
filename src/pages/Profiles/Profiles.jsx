import { useState, useEffect } from 'react'
import PostCard from '../../components/PostCard/PostCard'
import * as profileService from '../../services/profileService'
import * as postService from '../../services/postService'
import PostList from '../PostList/PostList'

const Profiles = (props) => {
  // const [profiles, setProfiles] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(()=> {
    postService.getAll()
    .then(posts => setPosts(posts))
  }, [])

  return (
    <div>
      <h1>Welcome to Viaggio</h1>
      <div>
      {<PostList posts={posts}/>}
      </div> 
    </div>
  )
}

export default Profiles