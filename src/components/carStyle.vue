<template>
  <div class="brand">
    <div class="carStyle">
      <img @click="gocarPanel()" class="exploreBtn" src="../images/common/explore.png" alt="">
      <div class="car-style">
        <div class="choose-car" @click="lineActive1()">
          <img src="../images/common/E43.png" alt="">
          <div v-bind:class='{"line":active,"line1":active1}'></div>
          <p>E43</p>
        </div>

        <div class="choose-car" @click="lineActive2()">
          <img src="../images/common/E63.png" alt="">
          <div v-bind:class='{"line":active,"line1":active2}'></div>
          <p>E63</p>
        </div>

        <div class="choose-car" @click="lineActive3()">
          <img src="../images/common/E63s.png" alt="">
          <div v-bind:class='{"line":active,"line1":active3}'></div>
          <p>E63S</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'brand',
  data () {
    return {
      active: true,
      active1: false,
      active2: false,
      active3: false
    }
  },
  methods: {
    lineActive1 () {
      this.active1 = true
      this.active2 = false
      this.active3 = false
    },
    lineActive2 () {
      this.active1 = false
      this.active2 = true
      this.active3 = false
    },
    lineActive3 () {
      this.active1 = false
      this.active2 = false
      this.active3 = true
    },
    gocarPanel () {
      this.$router.push({ name: 'car' })
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
.carStyle{
  width: 100%;
  height: 100%;
  background: url('../images/common/car-background.png') no-repeat;
  background-size:100% 100%;
}
.exploreBtn{
  width: 10%;
  position: absolute;
  top:20%;
  right:15%;
  cursor: pointer;
}
.car-style{
  width: 100%;
  height:9%;
  position:absolute;
  bottom: 5%;
  display: flex;
  align-items: center;
}
.choose-car{
  width: 19.5vw;
  height: 100px;
  cursor: pointer;
  margin-left: 6vw;
}
.choose-car img{
  width: 70%;
}
.choose-car .line{
  width: 100%;
  height: 4px;
  background:rgba(255,255,255,1);
}
.choose-car .line1{
  width: 100%;
  height: 4px;
  background:red;
}
.choose-car p{
  font-size: 1.2vw;
  color: #fff;
}


</style>
