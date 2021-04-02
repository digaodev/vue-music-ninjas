import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import CreatePlaylist from '../views/playlists/CreatePlaylist.vue'
import { auth } from '../services/firebase'

function requireAuth(to, from, next) {
  let user = auth.currentUser

  if (!user) {
    next({ name: 'Login' })
  } else {
    next()
  }
}

function requireNoAuth(to, from, next) {
  const loggedUser = auth.currentUser

  if (loggedUser) return next({ name: 'Home' })

  return next()
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: requireAuth
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: requireNoAuth
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    beforeEnter: requireNoAuth
  },
  {
    path: '/playlists/create',
    name: 'CreatePlaylist',
    component: CreatePlaylist,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
