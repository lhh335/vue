<template>
  <div class='hello'>
  {{message}}
  </div>
</template>

<script>
export default {
  name: 'Page',
  data () {
    return {
      message: 'this is page1'
    }
  },
  methods: {
    changeMessage: function () {
      this.message = 'this is page1 change'
    }
  }
}
</script>
