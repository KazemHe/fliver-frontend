import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './views/Home.vue'
import Chat from './views/Chat.vue'
import CarIndex from './views/CarIndex.vue'
import ReviewIndex from './views/ReviewIndex.vue'
import LoginSignup from './views/LoginSignup.vue'
import UserDetails from './views/UserDetails.vue'
import GigExplore from './views/GigExplore.vue'
import GigDetails from './views/GigDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/car',
  //   name: 'CarIndex',
  //   component: CarIndex
  // },
  {
    path: '/explore',
    name: 'GigExplore',
    component: GigExplore
  },
  {
    path: '/details',
    name: 'GigDetails',
    component: GigDetails
  },
  {
    path: '/review',
    name: 'ReviewIndex',
    component: ReviewIndex
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/login',
    name: 'LoginSignup',
    component: LoginSignup
  },
  {
    path: '/user/:id',
    name: 'UserDetails',
    component: UserDetails
  }
]


export const router = createRouter({
  routes,
  history: createWebHashHistory()
  // base: process.env.BASE_URL,
})

