<template>
  <div class="sidebar">

    <div class="bc-brand" v-show="secondPage"></div>
    <div class="choose-brand">
      <a href="javascript:history.back(-1)">
        <img class="backBtn" src="../../images/common/back.png" alt="">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      firstPage: true,
      secondPage: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar{
  width: 15vw;
  height: 100vh;
  float:left;
}
.bc-brand{
  width: 100%;
  height: 25vh;
  background: #ccc url(../../images/brand/bc.png) no-repeat 50% 40%;
  background-size:30%;
  position: relative;
}
.choose-brand{
  width: 100%;
  height: 75vh;
  position: relative;
  background: #222;
}
.backBtn{
  position: absolute;
  width: 60%;
  bottom: 6%;
  left: 20%;
}
</style>
