import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as profileService from '../../services/profileService'
import * as postService from '../../services/postService'
import PostList from '../PostList/PostList'
import PostCard from '../../components/PostCard/PostCard'

const Profiles = (props) => {
  const [profile, setProfile] = useState([])

  const params = useParams()
  console.log('blue:', profile)
  useEffect(()=> {
    profileService.getProfileById(params.id)
    .then(profile => setProfile(profile))
  }, [params.id])

  return (
    <div>
      <h1>Welcome to Your Viaggio Profile</h1>
      <div>
        {profile._id ? 
        <>
        
        {profile.name}
        {profile.posts.map(post =>
          <PostCard key={post._id} post={post}/>
    
        )}
        </>
        :
        ''
      }
      </div> 
    </div>
  )
}

export default Profiles