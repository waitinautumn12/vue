<template>
  <div style="width:100vw;height:100vh;">
    <iframe id="vr" :src="src" frameborder="0" width="100%" height="100%"> </iframe>
  </div>
</template>

<script>
export default {
  name: 'interor',
  data () {
    return {
      active: true,
      src: null
    }
  },
  created () {
    this.listener()
    this.src = 'src/vr/' + this.$route.params.style + '/tour.html'
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
