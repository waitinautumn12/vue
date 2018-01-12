<template>
  <div class="sidebar">
    <div class="bc-brand">
      <img :src="this.modelsrc" alt="">
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
  props: ['carmodel'],
  data () {
    return {
      modelsrc: 'src/images/brand/' + this.carmodel + '.png'
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
  display: flex;
  align-items: center;
  justify-content: center;
}
.bc-brand img{
  width: 1.28rem;
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
