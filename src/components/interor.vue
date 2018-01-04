<template>
  <div style="width:100vw;height:100vh;">
    <iframe id="vr" src="src/vr/vtour/tour.html" frameborder="0" width="100%" height="100%"> </iframe>
  </div>
</template>

<script>
export default {
  name: 'interor',
  data () {
    return {
      active: true
    }
  },
  created () {
    this.listener()
  },
  methods: {
    listener () {
      var _this = this
      window.addEventListener('message', function (e) {
        var id = parseInt(e.data)
        if (typeof (e.data) !== 'object') {
          _this.modelhotPoint(id)
        }
      }, false)
    },
    modelhotPoint (num) {
      this.$store.commit('addPoint', {num})
      this.$router.push({ name: 'explain' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
