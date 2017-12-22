<template>
  <div class="box">
    <a href="javascript:history.back(-1)">
      <img class="closeBtn" src="../images/common/close.png" alt="">
    </a>
    <el-carousel height="47vh" indicator-position="none" :autoplay="false" arrow="never" ref="carousel">
      <div class="prevBtn" v-on:click="setItemprev()"></div>
      <div class="nextBtn" v-on:click="setItemnext()"></div>
      <el-carousel-item v-for="item in explains" :key="item">
        <div class="carouse-box">

          <div v-bind:style="{background: item.url}"></div>
          <div class="carouse-box-right">
            <h1>{{item.title}}</h1>
            <p class="p1"></p>
            <p class="p2">{{item.text}}</p>
          </div>

        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Explain',
  data () {
    return {
      explains: [
        {url: 'url(src/images/common/point1.png) 50% 50%', title: '优雅流线，勾勒待发之势', text: '梅萨德斯-AMG E63 4MATIC以激动人心的方式将动感与革新的AMG设计风格巧妙结合。其中包括前部设计，集成了带银色镀铬双格栅条的AMG散热器格栅和采用了引人注目的A字型翼板设计'},
        {url: 'url(src/images/common/point2.png) 50% 50%', title: '优雅流线，勾勒待发之势', text: '梅萨德斯-AMG E63 4MATIC以激动人心的方式将动感与革新的AMG设计风格巧妙结合。其中包括前部设计，集成了带银色镀铬双格栅条的AMG散热器格栅和采用了引人注目的A字型翼板设计'}
      ]
    }
  },
  created () {

  },
  methods: {
    setItemprev (index) {
      this.$refs.carousel.prev()
    },
    setItemnext (index) {
      this.$refs.carousel.next()
    }
  }
}
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.box{
  width:100%;
  height:100vh;
  padding-top:26vh;
  background:#000;
  position:relative;
}
.prevBtn{
  width:5vw;
  height:100%;
  float:left;
  background:rgba(0,0,0,1) url(../images/common/left.png) no-repeat 50% 50%;
  background-size: 1vw;
  opacity: .8;
  position:absolute;
  left:0;
  top:0;
  z-index:99;
}
.prevBtn:hover{
  background:rgba(213,0,28,1) url(../images/common/left.png) no-repeat 50% 50%;
  background-size: 1vw;
}
.nextBtn{
  width:5vw;
  height:100%;
  float:left;
  background:rgba(0,0,0,1) url(../images/common/right.png) no-repeat 50% 50%;
  background-size: 1vw;
  opacity: .8;
  position:absolute;
  right:0;
  top:0;
  z-index:99;
}
.nextBtn:hover{
  background:rgba(213,0,28,1) url(../images/common/right.png) no-repeat 50% 50%;
  background-size: 1vw;
}
.carouse-box{
  width:100%;
  height:100%;
  padding:0 5vw;
}
.carouse-box div:nth-child(1){
  width:50%;
  height:100%;
  float:left;
}
.carouse-box div:nth-child(2){
  width:50%;
  height:100%;
  float:left;
  background: #000;
  opacity: .85;
}
.carouse-box-right{
  padding: 5vh 5vw 0 5vw;
  text-align:left;
}
.carouse-box-right .p1{
  margin:2vh 0;
  width:5vw;
  height:2px;
  background:rgba(213,0,28,1);
}
.closeBtn{
  width:2vw;
  height:2vw;
  position:absolute;
  top:26vh;
  right:5vw;
  margin-top:-2vw;
}
</style>
