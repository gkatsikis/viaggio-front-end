import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/listItems`

function create(listItem) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: listItem
  })
  .then(res => res.json())
}

function getAll() {
  return fetch(BASE_URL, {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
  .then(res => res.json())
}

function getListItemById(listItemId) {
  return fetch(`${BASE_URL}/${listItemId}`, {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
  .then(res => res.json())
}

async function updateListItem(listItem){
  const res = await fetch(`${BASE_URL}/${listItem._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(listItem)
  })
  const data = await res.json()
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