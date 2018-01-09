<template>
  <div class="brand">
    <div class="brand-active" @click="goModel('bc')"></div>
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
        { brand: 'ad', message: 'src/images/brand/ad.png' },
        { brand: 'bk', message: 'src/images/brand/bk.png' },
        { brand: 'bm', message: 'src/images/brand/bm.png' },
        { brand: 'bt', message: 'src/images/brand/bt.png' },
        { brand: 'bz', message: 'src/images/brand/bz.png' },
        { brand: 'dz', message: 'src/images/brand/dz.png' },
        { brand: 'ft', message: 'src/images/brand/ft.png' },
        { brand: 'fut', message: 'src/images/brand/fut.png' },
        { brand: 'gz', message: 'src/images/brand/gz.png' },
        { brand: 'jeep', message: 'src/images/brand/jeep.png' },
        { brand: 'lk', message: 'src/images/brand/lk.png' },
        { brand: 'mini', message: 'src/images/brand/mini.png' },
        { brand: 'mzd', message: 'src/images/brand/mzd.png' },
        { brand: 'qr', message: 'src/images/brand/qr.png' },
        { brand: 'qy', message: 'src/images/brand/qy.png' },
        { brand: 'nissan', message: 'src/images/brand/nissan.png' },
        { brand: 'xd', message: 'src/images/brand/xd.png' },
        { brand: 'xfl', message: 'src/images/brand/xfl.png' },
        { brand: 'xtl', message: 'src/images/brand/xtl.png' }
      ]
    }
  },
  methods: {
    goModel (B) {
      this.$router.push({ name: 'model' })
      this.$store.commit('recordBrand', { B })
      // if (window.localStorage) {
      //   let storage=window.localStorage
      //   storage.brand = B
      // }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.brand{
  width: 100%;
  height: 100%;
  float: left;
}
.brand > div{
  width: 20%;
  height: 25%;
  float: left;
  position: relative;
  cursor: pointer;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.brand .brand-active:nth-child(1){
  background: #f5f5f5 url('../images/brand/bc.png') no-repeat 50%;
  background-size: 30%;
}
.brand-wait{
  display: flex;
  align-items: center;
  justify-content: center;
}
.brand-wait img:nth-child(1){
  width: 45%;
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
  text-align: center;
  z-index: 2;
  color:rgba(4,4,4,1);
  position: absolute;
  top: 50%;
  margin-top: -15px;
  font-size: .167rem;
}
</style>
