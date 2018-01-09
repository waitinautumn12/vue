<template>
  <div class="wheel-panel">
    <div class="dj wheel-panel-box">
      <div v-for="(wheel, i) in wheels" @click="goWheel(wheel.name, i)" class="box">
        <div v-show="wheelActive === wheel.name"></div>
        <p v-show="wheelActive === wheel.name">{{wheel.wheel}}</p>
        <img v-bind:src="wheel.src" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import { wheelentry } from '@/script/wheelentry'
export default {
  name: 'wheelView',
  data () {
    return {
      wheels: null,
      wheelActive: 'twenty'
    }
  },
  created () {
    this.wheels = wheelentry(this.$store.state.style)
  },
  methods: {
    goWheel (ele, i) {
      this.wheelActive = ele
      this.$emit('showwheel', parseInt(i))
    }
  }
}
</script>
<style scoped>
.wheel-panel{
  width: 4.73rem;
  height: 100%;
  float: left;
  background:url(../../images/common/order-color.png);
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  position: relative;
}
.wheel-panel-box{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
}
.wheel-panel-box .box{
  width: 0.71rem;
  height: 100%;
  cursor: pointer;
  margin-left: 0.28rem;
  position: relative;
}
.wheel-panel-box .box div:nth-child(1){
  width: 100%;
  height: 0.06rem;
  background: rgba(213,0,28,1);
}
.wheel-panel-box .box p:nth-child(2){
  color:rgba(252,252,252,1);
  text-align: center;
  line-height: .35rem;
  font-size: 0.16rem;
}
.wheel-panel-box .box img{
  width: 100%;
  position:absolute;
  top: 0.38rem;
  left: 0;
}
</style>
