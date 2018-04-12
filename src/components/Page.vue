<template>
  <div class='hello'>
  {{this.message?'true':'false'}}
  <button v-on:click='changeMessage'>点击改变</button>
  </div>
</template>

<script>
export default {
  name: 'Page',
  data () {
    return {
      message: false
    }
  },
  methods: {
    changeMessage: function () {
      this.message = !this.message
    }
  }
}
</script>
