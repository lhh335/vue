<template>
  <div id="app">
    <el-aside width="120px" class="aside">
      <SideNav />
    </el-aside>
    <el-container class="container">
      <Header />
      <el-container class="main_container">
        <router-view />
      </el-container>
    </el-container>
  </div>
</template>

<script>
import router from "./router";
import SideNav from "./SideNav";
import Header from "./Header";

export default {
  name: "App",
  components: {
    Header,
    SideNav
  },
  mounted() {
    const el = document.getElementById("app");
    el.style.height = document.documentElement.clientHeight + "px";
  },
  methods: {
    onClick() {
      // router.push('/page'); // 该方法和下面的方法一样的效果，使用这个方法，需要在每个文件中导入路由
      // 要注意，当 <router-link> 对应的路由匹配成功，将自动设置 class 属性值 .router-link-active。
      // this.$route.params 匹配路径参数（冒号：）。eg: path: '/page/:index'
      // 其他方法：$route.query  和  $route.hash
      /**
       * 当使用一个通配符时，$route.params 内会自动添加一个名为 pathMatch 参数。它包含了 URL 通过通配符被匹配的部分：
       * eg: // 给出一个路由 { path: '/user-*' }
            this.$router.push('/user-admin')
            this.$route.params.pathMatch // 'admin'
            // 给出一个路由 { path: '*' }
            this.$router.push('/non-existing')
            this.$route.params.pathMatch // '/non-existing'
       */
      //  嵌套路由：chidren: []

      /**
       * 使用代码跳转路由时，可以使用this.$router.push(); 里面的参数分为两种：
       * 1、String： 值为path
       * 2、Object: 值为对象, 对象中的属性分为两种：name属性和params属性同时使用；path属性单独使用，path属性不可和params同时使用，否则只有path才会生效
       */

      /**
       *  beforeRouteUpdate用于当路由未发生变化时，甚至是参数发生变化，才可触发该钩子函数
       */

      // $router上的方法（router.push/replace/go）

      // 命名路由：即在定义路由的时候加上相应的标识name，例如下面这种形式：
      /**
       * const router = new VueRouter({
            routes: [
              {
                path: '/user/:userId',
                name: 'user',
                component: User  // 这里的components可以是个对象，里面用来命名视图，用来在一个路由下同时展示多个同级视图，在view层使用时，在相应的<router-view>标签上添加name属性，属性值为对应的Components中的相应属性
              }
            ]
          })
       */

      /**
       * 路由重定向：表示在即将跳转的path路由时，重定向到目标路由
       * 写法：1、{ path: '/a', redirect: '/b' }
       *      2、{ path: '/a', redirect: { name: 'b' } }
       *      3、{ path: '/a', redirect: to => {
       *              return '/b'
       *         } }
       */
      this.$router.push("/page2");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}

.container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.aside {
  height: 100%;
  background: #0f0927;
  padding-top: 31px;
  box-sizing: border-box;
  overflow: auto;
  
}

.main_container {
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

::-webkit-scrollbar {
  display: none;
}
</style>
