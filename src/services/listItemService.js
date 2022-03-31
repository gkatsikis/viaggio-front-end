import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/listItems`

const create = async (listItem) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: listItem
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

const getAll = async () => {
  const res = await fetch(BASE_URL, {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
  const data = await res.json()
  return data
}

function getListItemById(listItemId) {
  return fetch(`${BASE_URL}/${listItemId}`, {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
  .then(res => res.json())
}

// const getListItemById = async (listItemId) => {
//   try {
//     const res = await fetch(`${BASE_URL}/${listItemId}`)
//     const data = await res.json()
//     return data
//   } catch (error){
//     throw error
//   }
// }

const updateListItem = async (listItem) => {
  const res = await fetch(`${BASE_URL}/${listItem._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(listItem)
  })
  const data = await res.json()
  console.log(data)
  return data
}

const deleteListItem = async (listItemId) => {
  try {
    await fetch(`${BASE_URL}/${listItemId}`, {
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
  getListItemById,
  updateListItem,
  deleteListItem,
}