import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Page from '@/components/Page'
import Index1 from '@/components/subIndex/Index1'
import Index2 from '@/components/subIndex/Index2'
import Index3 from '@/components/subIndex/Index3'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/index',
      name: 'Index',
      component: Index,
      children: [
        {
          path: 'index1',
          name: 'Index1',
          component: Index1
        },
        {
          path: 'index2',
          name: 'Index2',
          component: Index2
        },
        {
          path: 'index3',
          name: 'Index3',
          component: Index3
        }
      ]
    }, {
      path: '/page',
      name: 'Page',
      component: Page
    }
  ]
})
