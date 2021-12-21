import axios from 'axios'

const root = 'api.408.co.kr'

export const getLoves = async () => {
  const url = `https://${root}/lbbl/loves/`

  const response = await axios.get(url)

  return response.data
}

export const getLovesDetail = async (code) => {
  const url = `https://${root}/lbbl/loves/${code}/`

  const response = await axios.get(url)

  return response.data
}

export const createLove = async (data) => {
  const url = `https://${root}/lbbl/loves/`

  const response = await axios.post(url, data)

  return response.data
}

export const createLovePhoto = async (data, type, code) => {
  const url = `https://${root}/lbbl/loves/photo/?type=${type}&code=${code}`
  const headers = {
    accept: 'application/json',
    'Content-Type': 'multipart/form-data charset=UTF-8',
  }
  const response = await axios.post(url, data, headers)

  return response.data
}
