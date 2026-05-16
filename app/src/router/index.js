export const routes = [
  { path: '/', name: 'Landing', component: () => import('../views/LandingView.vue') },
  { path: '/home', name: 'Home', component: () => import('../views/HomeView.vue') },
  { path: '/posts', name: 'Posts', component: () => import('../views/PostsView.vue') }
]

export default routes
