import {$authHost, $host} from "./index"
export const registrationAPI = async (firstname, lastname, birthday, email, password, gender) => {
  const response = await $host.post('auth/registration', {firstname, lastname, birthday, email, password, gender})
  localStorage.setItem('token', response.data.token)
  return response
}

export const loginAPI = async (email, password) => {
  const response = await $host.post('auth/login', {email, password})
  localStorage.setItem('token', response.data.token)
  return response
}

export const conWebSos = async (senderId, recipientId) => {
  const response = await $authHost.get('messages/' + senderId + '/' + recipientId)
  console.log('-------------------------')
  console.log(response.data)
  console.log('-------------------------')
  return response.data
}


export const allUsersAPI = async () => {
  const response = await $authHost.get('user/all')
  return response.data
}


