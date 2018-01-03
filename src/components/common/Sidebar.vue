<template>
  <div class="sidebar">
    <div class="hot-brand">
      <img src="../../images/common/hot.png" alt="">
      <p>热门品牌</p>
    </div>
    <div class="choose-brand">
      <img src="../../images/common/choose.png" alt="">
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
  width: 2.95rem;
  height: 100vh;
  float:left;
}
.hot-brand{
  width: 2.95rem;
  height: 25%;
  background: #D5001C;
  position: relative;
  line-height: .2rem;
}
.hot-brand img{
  width: .74rem;
  margin-top: .82rem;
}
.hot-brand p{
  width: 100%;
  font-size: .2rem;
  color: #fff;
  margin-top: 0.135rem;
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

.choose-brand{
  width: 2.95rem;
  height: 75%;
  position: relative;
  background: #222;
  line-height: .2rem;
}
.choose-brand img{
  margin-top: 3.22rem;
  width: .74rem;
}
.choose-brand p{
  font-size: .2rem;
  color: #fff;
  margin-top: 0.14rem;
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
