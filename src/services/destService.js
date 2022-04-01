import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/destinations`

const create = async (location) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: location
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

const getAll = async () => {
  const res = await fetch(BASE_URL)
  const data = await res.json()
  return data
}

export {
  create,
  getAll,
}