<template>
  <div class="control-panel">
    <a href="javascript:history.back(-1)">
      <div class="panel-left">
        <div class="backBtn1">返回</div>
      </div>
    </a>
    <div class="color-panel-padding" ref="colorbox">
      <div class="color-panel">
        <div class="dj color-panel-box">
          <div v-for="(col, i) in colors" @click="goColor(col.name, i)" class="box">
            <div v-show="colActive === col.name"></div>
            <p v-show="colActive === col.name">{{col.color}}</p>
            <img @touchstart.stop="colortouch_s($event)" @touchmove.stop="colortouch_m($event, i)" @touchend.stop="colortouch_e($event, i)" v-bind:style="i === colorsign ? {'position' : 'fixed', 'left': colorpositionX, 'top' : colorpositionY} : '' " v-bind:src="col.src" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="wheel-panel">
      <div class="dj wheel-panel-box">
        <div v-for="(wheel, i) in wheels" @click="goWheel(wheel.name, i)" class="box">
          <div v-show="wheelActive === wheel.name"></div>
          <p v-show="wheelActive === wheel.name">{{wheel.wheel}}</p>
          <img v-bind:src="wheel.src" alt="">
        </div>
      </div>
    </div>
    <!-- <div class="space-panel">
      <div class="dj space-panel-box">
        <div v-for="(space, i) in spaces" @click="goSpace(space.name, i)" class="box">
          <div v-show="spaceActive === space.name"></div>
          <p v-show="spaceActive === space.name">{{space.space}}</p>
          <img v-bind:src="space.src" alt="">
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
import { colors, wheels, carsheel } from '@/script/car'
export default {
  name: 'panel',
  data () {
    return {
      carsheel: carsheel,
      colors: colors,
      colActive: 'black',
      wheels: wheels,
      wheelActive: 'twenty',
      colorsign: null,
      colorpositionX: null,
      colorpositionY: null
    }
  },
  methods: {

  }
}
</script>
<style scoped>
.control-panel{
  width: 100vw;
  height:10vh;
  position: absolute;
  bottom: 3%;
  z-index: 4;
}
.panel-left{
  width: 6.4vw;
  height:10vh;
  padding-right:10px;
  float:left;
}
.backBtn1{
  width: 100%;
  height: 10vh;
  background:rgba(0,0,0,1) url(../../images/common/left.png) no-repeat 20% 50%;
  background-size: 10%;
  opacity: .5;
  color:rgba(252,252,252,1);
  display: flex;
  justify-content:center;
  align-items:center;
  cursor: pointer;
}
.color-panel-padding{
  width: 46vw;
  height:10vh;
  float: left;
}
.color-panel{
  width: 46vw;
  height:10vh;
  background:url(../../images/common/order-color.png);
  position: relative;
}
.wheel-panel{
  width: 24.6vw;
  height:10vh;
  float: left;
  background:url(../../images/common/order-color.png);
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  position: relative;
}
.space-panel{
   width: 23vw;
   height:10vh;
   float: left;
   background:url(../../images/common/order-color.png);
   position: relative;
}
.color-panel-box{
  position: absolute;
  width: 46vw;
  height: 10vh;
  left: 0;
}
.color-panel-box .box{
  width: 4.6vw;
  height: 10vh;
  cursor: pointer;
  margin-left: 20px;
  position: relative;
}

.color-panel-box .box div:nth-child(1){
  width: 100%;
  height:4px;
  background: rgba(213,0,28,1);
}
.color-panel-box .box p:nth-child(2){
  color:rgba(252,252,252,1);
  text-align: center;
  line-height: 18px;
  font-size: 12px;
}
.color-panel-box .box img{
  width: 4.6vw;
  margin-top: 5px;
  position:absolute;
  top: 22px;
  left: 0;
}
.wheel-panel-box{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
}
.wheel-panel-box .box{
  width: 15%;
  height: 100%;
  cursor: pointer;
  margin-left: 20px;
  position: relative;
}
.wheel-panel-box .box div:nth-child(1){
  width: 100%;
  height:4px;
  background: rgba(213,0,28,1);
}
.wheel-panel-box .box p:nth-child(2){
  color:rgba(252,252,252,1);
  text-align: center;
  line-height: 18px;
  font-size: 12px;
}
.wheel-panel-box .box img{
  width: 100%;
  margin-top: 5px;
  position:absolute;
  top: 22px;
  left: 0;
}
.space-panel-box{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
}
.space-panel-box .box{
  width: 20%;
  height: 100%;
  cursor: pointer;
  margin-left: 20px;
  position: relative;
}
.space-panel-box .box div:nth-child(1){
  width: 100%;
  height:4px;
  background: rgba(213,0,28,1);
}
.space-panel-box .box p:nth-child(2){
  color:rgba(252,252,252,1);
  text-align: center;
  line-height: 18px;
  font-size: 12px;
}
.space-panel-box .box img{
  width: 100%;
  margin-top: 5px;
  position:absolute;
  top: 22px;
  left: 0;
}
</style>
