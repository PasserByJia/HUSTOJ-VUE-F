import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      hidden: true,
      children: [
        {
          path: '/',
          component: () => import('@/views/Home/index')
        }
      ]
    },

  ]
})
