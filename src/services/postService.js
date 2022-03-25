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
    const res = await fetch(`${BASE_URL}${postId}`)
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export {
  create,
  getAll,
  getPostById
}