import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Index from '@/components/Index'
import Page from '@/components/Page'
import Index1 from '@/components/subIndex/Index1'
import Index2 from '@/components/subIndex/Index2'
import Index3 from '@/components/subIndex/Index3'

Vue.use(Router)

const page1 = {
  template: `<p>这是模版1</p>`
}

const defaults = {
  template: `<p>这是默认选项</p>`
}

const helper = {
  template: `<p>这是helper选项</p>`
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'page1',
          component: page1
        },
        {
          path: 'page2',
          components: {
            default: defaults,
            helper
          }
        }
      ]
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
      path: '/page/:ids',
      name: 'Page',
      component: Page,
      props: true
    }, {
      path: '/redirect',
      redirect: '/index'
    }, {
      path: 'redirect1',
      redirect: {name: 'Page'}
    }
  ]
})
