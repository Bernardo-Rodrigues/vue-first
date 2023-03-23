import CpfsVue from '@/pages/Cpfs.vue'
import { createRouter, createWebHistory } from 'vue-router'
import CommentsVue from '../pages/Comments.vue'

const routes = [
  {
    path: '/cpf',
    name: 'Cpf',
    component: CpfsVue
  },
  {
    path: '/comment',
    name: 'Comments',
    component: CommentsVue
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
