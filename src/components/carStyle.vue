<template>
  <div class="brand">
    <div class="carStyle">
      <img @click="gocarPanel()" class="exploreBtn" src="../images/common/explore.png" alt="">
      <div class="car-style">
        <div v-for="(item, i) in carstyle" :style="item.style" class="choose-car" @click="lineActive1(i, item.name)">
          <img v-bind:src="item.url" alt="">
          <div v-bind:class='{"line":active,"line1":activearr[i]}'></div>
          <p>{{item.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { carstyle } from '@/script/carstyle'
export default {
  name: 'brand',
  data () {
    return {
      active: true,
      activearr: [true, false, false],
      carstyle: null,
      passstyle: null
    }
  },
  created () {
    let handleModel = this.$route.params.model.replace('-', '_')
    this.carstyle = carstyle(handleModel)
    this.passstyle = this.carstyle[0].name
  },
  methods: {
    lineActive1 (i, S) {
      for (let i = 0; i < 2; i++) {
        this.activearr = []
        this.activearr.push(false)
      }
      this.activearr[i] = true
      this.passstyle = S
    },
    gocarPanel () {
      this.$router.push({ name: 'car', params: {brand: this.$route.params.brand, model: this.$route.params.model, style: this.passstyle} })
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
.carStyle{
  width: 100%;
  height: 100%;
  background: url('../images/common/car-background.png') no-repeat;
  background-size:100% 100%;
}
.exploreBtn{
  width: 1.65rem;
  position: absolute;
  top:2.29rem;
  right:1.81rem;
  cursor: pointer;
}
.car-style{
  width: 100%;
  height: 1.525rem;
  margin-left:1%;
  position:absolute;
  bottom: 0.55rem;
  display: flex;
  align-items: center;
  /*justify-content: center;*/
}
.choose-car{
  width: 3.646rem;
  height: 100%;
  cursor: pointer;
  margin-left: 0.447rem;
  line-height: 0.5rem
}
.choose-car img{
  width: 2.36rem;
}
.choose-car .line{
  width: 100%;
  height: 0.05rem;
  background:rgba(255,255,255,1);
  margin-top: .23rem;
}
.choose-car .line1{
  width: 100%;
  height: 0.05rem;
  background:red;
  margin-top: .23rem;
}
.choose-car p{
  font-size: .33rem;
  color: #fff;
  margin-top: .23rem;
}
</style>
