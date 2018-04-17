<template>
  <div class="hello">
  {{myIndex}}
  <router-link to="/index/index1">index1</router-link>
  <router-link to="/index/index2">index2</router-link>
  <router-link to="/index/index3">index3</router-link>
  <router-view/>
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
