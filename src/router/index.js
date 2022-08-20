import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Inicio from '../views/InicioView.vue'
//TALLER//
import create from '..views/admin/productos/create.vue'
import index from '..views/admin/productos/index.js'
import update from '..views/admin/productos/update'
  
// import iniciosesion from '..views/'

Vue.use(VueRouter)

const routes = [
  {
    path:'/update',
    name:'update',
    component: update
  },
  {
    path:'/index',
    name:'index',
    component: index
  },

  {
    path:'/create',
    name:'create',
    component: create
  },
  {
    path:'/Inicio',
    name:'Inicio',
    component: Inicio
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
 
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
