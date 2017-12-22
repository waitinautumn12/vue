<template>
  <div class="sidebar">
    <div class="hot-brand">
      <p>热门品牌</p>
    </div>
    <div class="choose-brand">
      <p>选择品牌</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {

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
.hot-brand{
  width: 100%;
  height: 25vh;
  background: #D5001C url(../../images/common/hot.png) no-repeat 50% 30%;
  background-size:30%;
  position: relative;
}
.hot-brand:after{
  content:'';
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-left: 8px solid #D5001C;
  border-bottom: 8px solid transparent;
  position: absolute;
  left: 100%;
  top:50%;
  z-index: 999;
}

.hot-brand p{
  width: 100%;
  position: absolute;
  top: 70%;
  text-align: center;
  font-size: 1.5vw;
  color: #fff;
}
.choose-brand{
  width: 100%;
  height: 75vh;
  position: relative;
  background: #222 url(../../images/common/choose.png) no-repeat 50% 45%;
  background-size:30%;
}
.choose-brand p{
  width: 100%;
  position: absolute;
  top: 60%;
  text-align: center;
  font-size: 1.5vw;
  color: #fff;
}
.choose-brand:after{
  content:'';
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-left: 8px solid #222;
  border-bottom: 8px solid transparent;
  position: absolute;
  left: 100%;
  top:50%;
  z-index: 999;
}
</style>
