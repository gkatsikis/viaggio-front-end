import { useState, useEffect } from 'react'
import styles from '../src/App.css'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import AddPost from './pages/AddPost/AddPost'
import PostList from './pages/PostList/PostList'
import EditPost from './pages/EditPost/EditPost'
import * as postService from './services/postService'
import PostDetails from './pages/PostDetails'
import Destination from './pages/Destination/Destination'
import * as destService from './services/destService'
import BucketList from './pages/BucketList/BucketList'
import * as listItemService from './services/listItemService'
import ListItemDetails from './pages/ListItem/ListItemDetails'


const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  const [posts, setPosts] = useState([])
  const [locations, setLocations] = useState([])
  const [listItem, setListItem] = useState([])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddDestination = async(data) => {
    const newLocation = await destService.create(data)
    console.log('this is newLocation!!!', newLocation)
    setLocations([...locations, newLocation])
    navigate('/destination')
  }

  const handleAddPost = async(data) => {
    console.log('NEW POST DATA', data)
    const newPost = await postService.create(data)
    console.log(newPost)
    setPosts([...posts, newPost])
    navigate('/')
  }

  const handleDeletePost = async (postId) => {
    console.log('oneParamId', postId)
    try {
      await  postService.deletePost(postId)
      //filter through postsState, only return the posts
      //where _id does not match postId
      setPosts(posts.filter((post) => post._id !== postId))
      navigate('/')
    } catch (error) {
      throw error
    }
  }

  const handleDeleteListItem = async (listItemId) => {
    try {
      await listItemService.deleteListItem(listItemId)
      setListItem()
    } catch (error) {
      throw error
    }
    navigate('/createBucketList')
  }

  useEffect(() => {
    postService.getAll()
    .then(allPosts => {
      setPosts(allPosts)
    }) 
  }, [])

  const handleUpdate = updatedPostData => {
    
    const newPostArray = posts.map(post => 
      post._id === updatedPostData._id ? updatedPostData : post
    )
    setPosts(newPostArray)
		navigate('/')
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<PostList posts={posts} />}/>
        <Route path="/addPost" element={<AddPost handleAddPost={handleAddPost}/>} />
        <Route path="/destination" element={<Destination handleAddDestination={handleAddDestination} />} />
        <Route path="/post/:id" element={<PostDetails user={user} handleDeletePost={handleDeletePost} />}/>
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profile/:id"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin} /> : <Navigate to="/login" />}
        />
        <Route path='/edit' element={<EditPost handleUpdate={handleUpdate}/>}/>
        <Route path="/createBucketList" element={<BucketList />}/>
        <Route path="/listItem/:id" element={<ListItemDetails user={user} handleDeleteListItem={handleDeleteListItem}  />}/>
      </Routes>
    </>
  )
}

export default App
