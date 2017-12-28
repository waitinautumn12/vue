<template>
  <div style="width:100vw;height:100vh;">
    <iframe id="vr" src="src/vr/ns3/" frameborder="0" width="100%" height="100%"> </iframe>
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
    window.addEventListener('message', function (e) {
      var id = e.data
      console.log(id)
    }, false)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
