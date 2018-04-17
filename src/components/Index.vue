<template>
  <div class="hello">
  {{myIndex}}
  <router-link to="/index/index1">index1</router-link>
  <router-link to="/index/indexView">indexView</router-link>
  <router-view/>
  <router-view name='view2'/>
  <router-view name='view3'/>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      myIndex: 'this is my practice'
    }
  },
  computed: {
    username () {
      return this.$route.params
    }
  }
}
</script>
