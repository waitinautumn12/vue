<template>
  <div style="width:100vw;height:100vh;">
    <!-- <a href="javascript:history.back(-1)">
      <div style="width:40px;height:40px;background:red;position:fixed;left:30px;"></div>
    </a> -->
    <iframe id="vr" src="src/vr/ns1/" frameborder="0" width="100%" height="100%"> </iframe>
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
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
