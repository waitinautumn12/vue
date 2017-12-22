<template>
  <div class="brand">
    <div class="brand-active" @click="goModel()"></div>
    <div class="brand-active" @click="goModel()"></div>
    <div v-for="item in items" class="brand-wait">
      <img v-bind:src="item.message">
      <img src="../images/common/wait.png" alt="">
      <p>敬请期待</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'brand',
  data () {
    return {
      items: [
        { message: 'src/images/brand/bk.png' },
        { message: 'src/images/brand/bm.png' },
        { message: 'src/images/brand/bt.png' },
        { message: 'src/images/brand/bz.png' },
        { message: 'src/images/brand/dz.png' },
        { message: 'src/images/brand/ft.png' },
        { message: 'src/images/brand/fut.png' },
        { message: 'src/images/brand/gz.png' },
        { message: 'src/images/brand/jeep.png' },
        { message: 'src/images/brand/lk.png' },
        { message: 'src/images/brand/mini.png' },
        { message: 'src/images/brand/mzd.png' },
        { message: 'src/images/brand/qr.png' },
        { message: 'src/images/brand/qy.png' },
        { message: 'src/images/brand/rc.png' },
        { message: 'src/images/brand/xd.png' },
        { message: 'src/images/brand/xfl.png' },
        { message: 'src/images/brand/xtl.png' }
      ]
    }
  },
  methods: {
    goModel () {
      this.$router.push({ name: 'model' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.brand{
  width: 85vw;
  height: 100vh;
  fontSize: 1.5vw;
  float: left;
}
.brand > div{
  width: 20%;
  height: 25vh;
  float: left;
  position: relative;
  cursor: pointer;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.brand .brand-active:nth-child(1){
  background: #f5f5f5 url('../images/brand/ad.png') no-repeat 50%;
  background-size: 40%;
}
.brand .brand-active:nth-child(2){
  background: #f5f5f5 url('../images/brand/bc.png') no-repeat 50%;
  background-size: 30%;
}
.brand-wait{
  display: flex;
  align-items: center;
  justify-content: center;
}
.brand-wait img:nth-child(1){
  width: 35%;
  z-index: 1;
}
.brand-wait img:nth-child(2){
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
}
.brand-wait p{
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  z-index: 2;
  color:rgba(4,4,4,1);
  position: absolute;
  top: 50%;
  margin-top: -15px;
}
</style>
