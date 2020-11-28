import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFounded from '../views/NotFounded.vue'
import Calculator from '../components/Calculator.vue'
import Kalendar from '../components/Kalendar.vue'

Vue.use(VueRouter)
let loged=true;
const routes = [
  {
    path: '/todo',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/kalendar',
    name: 'Kalendar',
    component: Kalendar
  },
  {
    path: '*',
    name: 'NotFounded',
    component: NotFounded
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: Calculator,
    beforeEnter:(to,from,next)=>{
       if(loged){
         next();
       }else{
         next('/todo')
       }
    }
  },
  {
    path: '/',
    name: 'About',
    component: () => import( '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
