export default function(context) {
  const token = context.store.state.getphotos.apiKey
  console.log(token)
  context.app.$axios.defaults.headers.common['Authorization'] = `Client-ID ${token}`
  context.app.$axios.setHeader('Authorization', `Client-ID ${token}`)
  context.app.$axios.setToken(`Client-ID ${token}`)
}
