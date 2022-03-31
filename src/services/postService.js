import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/posts`
// REACT_APP_BACKEND_SERVER_URL=http://localhost:3001
function create(post) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: post
  })
  .then(res => res.json())
}

function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json())
}


const getPostById = async (postId) => {
  try {
    const res = await fetch(`${BASE_URL}/${postId}`)
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}
      
// function getPostById(postId) {
//   return fetch(`${BASE_URL}/${postId}`)
//   .then(res => res.json())
//   .catch(err => {
//     console.log(err)
//   })
// }
      async function update(post){
          const res = await fetch(`${BASE_URL}/${post._id}`, {
              method: 'PUT',
              headers: {'content-type': 'application/json'},
              body: JSON.stringify(post)
            })
            const data = await res.json()
            console.log(data)
            return data
          }
          

// function update(post) {
//   return fetch(`${BASE_URL}/${post._id}`, {
//     method: 'PUT',
//     headers: {'content-type': 'application/json'},
//     body: JSON.stringify(post)
//   })
//   .then(res => res.json())
// }

// function deletePost(postId) {
//   return fetch(`${BASE_URL}/${postId}`, {
//     method: 'DELETE',
//     headers: { 'Authorization': 'Bearer ' + tokenService.getToken() }
//   })
//   .catch(err => {
//     console.log(err)
//   })
// }

const deletePost = async (postId) => {
  try {
    await fetch(`${BASE_URL}/${postId}`, {
      method: 'DELETE',
      headers: { 'Authorization': 'Bearer ' + tokenService.getToken() }
    })
  } catch (error) {
    throw error
  }
}

// function createComment(postId, comment) {
//   return fetch(`${BASE_URL}/${postId}/comments`, {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json',
//       'Authorization': 'Bearer ' + tokenService.getToken()
//     },
//     body: JSON.stringify(comment)
//   })
//   .catch(err => {
//     console.log(err)
//   })
// }

const createComment = async (postId, comment) => {
  try{
    const res = await fetch(`${BASE_URL}/${postId}/comments`, {
      method: 'POST',
      headers: {
          'content-type': 'application/json',
          'Authorization': 'Bearer ' + tokenService.getToken()
      },
      body: JSON.stringify(comment)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

// function updateComment(postId, commentId) {
//   return fetch(`${BASE_URL/${postId}}`)
// }

const updateComment = async (postId, commentId) => {
  try {
    const res = await fetch(`${BASE_URL}/${postId}/comments/${commentId}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
      },
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

const deleteComment = async (postId, commentId) => {
  try {
    await fetch(`${BASE_URL}/${postId}/comments/${commentId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    })
  } catch (error) {
    throw error
  }
}

export {
  create,
  update,
  getAll,
  getPostById,
  deletePost,
  createComment,
  updateComment,
  deleteComment,
}