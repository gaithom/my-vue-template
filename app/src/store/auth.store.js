export const authStore = {
  user: null,
  login(user) { this.user = user },
  logout() { this.user = null }
}
