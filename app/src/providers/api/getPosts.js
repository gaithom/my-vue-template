import { api } from './axios'

export async function getPosts() {
  const res = await api.get('/posts')
  return res.data
}
