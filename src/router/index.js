import { createRouter, createWebHistory } from 'vue-router'
import Apropos from '@/vue/Appropos.vue'
import Services from '@/vue/Services.vue'
import Blog from '@/vue/Blog.vue'
import Formation from '@/vue/Formation.vue'
import Contact from '@/vue/Contact.vue'

const routes = [
  { path: '/appropos', component: Apropos },
  { path: '/services', component: Services },
  { path: '/blog', component: Blog },
  { path: '/formation', component: Formation },
  { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
