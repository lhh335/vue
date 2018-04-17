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
          path: 'indexView',
          components: {
            view2: Index2,
            view3: Index3
          }
        }
      ]
    }, {
      path: '/page',
      name: 'Page',
      component: Page,
      alias: '/a'
    }, {
      path: '/redirect',
      redirect: '/index'
    }, {
      path: 'redirect1',
      redirect: {name: 'Page'}
    }
  ]
})
