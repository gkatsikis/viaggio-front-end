import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/bucketlists`

function create(bucketlist) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: bucketlist
  })
  .then(res => res.json())
}

function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json())
}

const getBucketlistById = async (bucketlistId) => {
  try {
    const res = await fetch(`${BASE_URL}/${bucketlistId}`)
    const data = await res.json()
    return data
  } catch (error){
    throw error
  }
}

async function update(bucketlist){
  const res = await fetch(`${BASE_URL}/${bucketlist._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(bucketlist)
  })
  const data = await res.json()
  console.log(data)
  return data
}

const deleteBucketlist = async (bucketlistId) => {
  try {
    await fetch(`${BASE_URL}/${bucketlistId}`, {
      method: 'DELETE',
      headers: {'Authorization': 'Bearer ' + tokenService.getToken() }
    })
  } catch (error) {
    throw error
  }
}

export {
  create,
  getAll,
  getBucketlistById,
  update,
  deleteBucketlist,
}