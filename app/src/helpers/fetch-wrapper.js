export async function fetchWrapper(url, opts = {}) {
  const res = await fetch(url, opts)
  if (!res.ok) throw new Error(res.statusText)
  return res.json()
}
