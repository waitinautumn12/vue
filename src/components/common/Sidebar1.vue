<template>
  <div class="sidebar">
    <div class="bc-brand" v-show="secondPage">
      <img src="../../images/brand/bc.png" alt="">
    </div>
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
  width: 2.95rem;
  height: 100vh;
  float:left;
}
.bc-brand{
  width: 100%;
  height: 25%;
  background: rgba(0,0,0,.1);
  background-size:30%;
  position: relative;
}
.bc-brand img{
  width: 1.26rem;
  margin-top: 0.77rem;
}
.choose-brand{
  width: 100%;
  height: 75%;
  position: relative;
  background: #222;
}
.backBtn{
  position: absolute;
  width: 1.65rem;
  bottom: .55rem;
  left: .64rem;
}
</style>
