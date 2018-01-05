<template>
  <div v-bind:style="{background : senceurl}" class="thirdPage" @touchstart="bodytouch_s" @touchmove="bodytouch_m" @touchend="bodytouch_e">
    <div class="pattern-option">
      <!-- <div v-for="(url, i) in patterns" @click="pattern(i)" v-bind:style="{ background: i === patternNum ? url.src1 : url.src}">
        <div v-show=" i === patternNum">
          <div class="show-pattern-background" v-bind:style="{ background: url.src2}"></div>
        </div>
      </div> -->

      <div id="a1" @click="pattern(0)" v-bind:style="{ background: 0 === patternNum ? patterns[0].src1 : patterns[0].src}">
        <div></div>
      </div>
      <div id="a2" @click="pattern(1)" v-bind:style="{ background: 1 === patternNum ? patterns[1].src1 : patterns[1].src}">
        <div></div>
      </div>
      <div id="a3" @click="pattern(2)" v-bind:style="{ background: 2 === patternNum ? patterns[2].src1 : patterns[2].src}">
        <div v-show=" 2 === patternNum" style="line-height:.2rem;">
          <img style="width:1.69rem;margin-top:0.17rem;" src="../images/common/wechart.jpg" alt="">
          <p style="font-size:0.15rem;color:#fff;margin-top:.12rem;">扫描二维码</p>
          <p style="font-size:0.15rem;color:#fff;">预约试驾惊喜等你来拿</p>
        </div>
      </div>
      <div id="a4" @click="pattern(3)" v-bind:style="{ background: 3 === patternNum ? patterns[3].src1 : patterns[3].src}">
        <div v-show=" 3 === patternNum">
          <order />
        </div>
      </div>
      <div id="a5" @click="pattern(4)" v-bind:style="{ background: 4 === patternNum ? patterns[4].src1 : patterns[4].src}">
        <div class="facturer-suggest" v-show=" 4 === patternNum">
          <p>制造商建议零售价</p>
          <p></p>
          <p>1,280,000元</p>
        </div>
      </div>
    </div>
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
              <img @touchstart.stop="colortouch_s($event)" @touchmove.stop="colortouch_m($event, i)" @touchend.stop="colortouch_e($event, i, col.name)" v-bind:style="i === colorsign ? {'position' : 'fixed', 'left': colorpositionX, 'top' : colorpositionY} : '' " v-bind:src="col.src" alt="">
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
      <div class="space-panel">
        <div class="dj space-panel-box">
          <div v-for="(space, i) in spaces" @click="goSpace(space.name, i)" class="box">
            <div v-show="spaceActive === space.name"></div>
            <p v-show="spaceActive === space.name">{{space.space}}</p>
            <img v-bind:src="space.src" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="area">
      <div class="carBox">
        <div class="dianBox">
          <div class="hotpoint" v-for="(hot, num) in hotPoint">
            <img v-for="(item, i) in hot" @click="commentary(num)" v-show="item[0] === imgshow" v-bind:style="{ left: item[1] + 'px', top: item[2] + 'px'}" src="../images/common/dian.png" alt="">
          </div>
        </div>

        <div class="car">

          <div v-for="(item, i) in coloritems" v-show="i === showcolor" v-bind:class="item.class">
            <img v-for="(img, i) in item.color" v-bind:src="img" v-show="i === imgshow" alt="">
          </div>

          <div v-for="(item, i) in wheelitems" v-show="i === showwheel" v-bind:class="item.class">
            <img v-for="(img, i) in item.wheel" v-bind:src="img" v-show="i === imgshow" alt="">
          </div>

          <div class="dm">
            <div class="n">
              <img v-for="(img, i) in carsheel" v-bind:src="img" v-show="i === imgshow" alt="">
            </div>
          </div>
        </div>
      </div>

      <div class="division" v-show="divisionShow" v-bind:style="{left : division_l}" @touchstart.stop="divisiontouch_s" @touchmove.stop="divisiontouch_m">
        <img :style="{top : division_t}" src="../images/common/point.png" alt="">
      </div>

      <div ref="carBox_vs" v-bind:style="{width : division_l}" v-show="divisionShow" class="carBox-vs">

        <div class="car">
          <div v-for="(item, i) in coloritems" v-show="i === dragshow" v-bind:class="item.class">
            <img v-for="(img, i) in item.color" v-bind:src="img" v-show="i === imgshow" alt="">
          </div>

          <div v-for="(item, i) in wheelitems" v-show="i === showwheel" v-bind:class="item.class">
            <img v-for="(img, i) in item.wheel" v-bind:src="img" v-show="i === imgshow" alt="">
          </div>

          <div class="dm">
            <div class="n">
              <img v-for="(img, i) in carsheel" v-bind:src="img" v-show="i === imgshow" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { patterns, colors, wheels, spaces, carsheel } from '@/script/car'
import { coloritems } from '@/script/color'
import { wheelitems } from '@/script/wheel'
import { hotPoint } from '@/script/point'
import order from '@/components/common/order'

export default {
  name: 'CAR',
  components: {
    order
  },
  data () {
    return {
      wW: null,
      wH: null,
      patternNum: null,
      patternDefault: true,
      divisionShow: false,
      division_l: '50%',
      division_t: '50%',
      senceurl: 'url(src/images/common/sence1.png) 0% 0% / 100%',
      patterns: patterns,
      colors: colors,
      colortouch: false,
      colActive: 'black',
      wheels: wheels,
      wheelActive: 'twenty',
      hotPoint: hotPoint,
      spaces: spaces,
      spaceActive: 'dream',
      carsheel: carsheel,
      coloritems: coloritems,
      wheelitems: wheelitems,
      showcolor: 0,
      colorsign: null,
      colorpositionX: null,
      colorpositionY: null,
      dragshow: 1,
      imgshow: 0,
      showwheel: 0,
      sX: '',
      offsetX: null,
      offsetY: null
    }
  },
  created () {
    this.division_l = (document.body.offsetWidth / 2) + 'px'
    this.wW = document.body.offsetWidth
    this.wH = document.body.offsetHeight
  },
  methods: {
    goColor (ele, i) {
      if (this.divisionShow) {
        return
      }
      this.colActive = ele
      this.showcolor = parseInt(i)
      if (!this.divisionShow) {
        this.dragshow = parseInt(i) + 1
      }
    },
    goWheel (ele, i) {
      this.wheelActive = ele
      this.showwheel = parseInt(i)
    },
    goSpace (ele, i) {
      this.spaceActive = ele
      switch (i) {
        case 0 :
          this.senceurl = 'url(src/images/common/sence1.png) 0% 0% / 100%'
          break
        case 1 :
          this.senceurl = 'url(src/images/common/sence2.png) 0% 0% / 100%'
          break
        case 2 :
          this.senceurl = 'url(src/images/common/sence3.png) 0% 0% / 100%'
          break
      }
    },
    bodytouch_s (e) {
      let _xy = this.getXY(e)
      this.sX = _xy.x
    },
    bodytouch_m (e) {
      let _xy = this.getXY(e)
      let eX = _xy.x
      if (Math.abs(eX - this.sX) > 10) {
        this.changCar(eX - this.sX)
      }
      this.sX = eX
    },
    bodytouch_e (e) {
      // console.log(this.getXY(e))
    },
    divisiontouch_s (e) {
      console.log(1)
    },
    divisiontouch_m (e) {
      let _xy = this.getXY(e)
      let eX = _xy.x
      let eY = _xy.y
      this.division_l = eX + 'px'
      this.division_t = eY + 'px'
    },
    colortouch_s (e) {
      let xy = this.getXY(e)
      let _xy = this.getoffsetXY(e)
      let eX = _xy.x
      let eY = _xy.y
      let parentoffsetleft = this.$refs.colorbox.offsetLeft
      // 点击位置相对于色块水平方向的距离
      this.offsetX = parseInt(xy.x) - (parseInt(eX) + parseInt(parentoffsetleft))
      // 点击位置相对于色块竖直方向的距离
      this.offsetY = eY
    },
    colortouch_m (e, i) {
      if (this.divisionShow) {
        this.colortouch = true
        let _xy = this.getXY(e)
        this.colorsign = i
        this.colorpositionX = parseInt(_xy.x) - parseInt(this.offsetY) + 'px'
        this.colorpositionY = parseInt(_xy.y) - parseInt(this.offsetY) + 'px'
      } else {

      }
    },
    colortouch_e (e, i, ele) {
      if (this.colortouch) {
        this.colActive = ele
        this.colorsign = null
        let divisionL = parseInt(this.division_l.replace('px'))
        let colorpositionX = parseInt(this.colorpositionX.replace('px'))
        if (colorpositionX > divisionL) {
          this.showcolor = parseInt(i)
        } else {
          this.dragshow = parseInt(i)
        }
        this.colortouch = false
      }
    },
    getXY (e) {
      let _e = false
      if (e.targetTouches || e.changedTouches || e.touches) {
        if (e.targetTouches[0] !== undefined) {
          _e = e.targetTouches[0]
        } else if (e.changedTouches[0] !== undefined) {
          _e = e.changedTouches[0]
        } else if (e.touches[0] !== undefined) {
          _e = e.touches[0]
        }
      }
      if (!_e) { _e = e }
      return {
        x: Math.floor(_e.pageX),
        y: Math.floor(_e.pageY),
        cx: Math.floor(_e.clientX),
        cy: Math.floor(_e.clientY),
        ox: e.target.parentNode,
        oy: e.target
      }
    },
    getoffsetXY (e) {
      let _e = false
      // if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
      if (e.targetTouches || e.changedTouches || e.touches) {
        if (e.targetTouches[0] !== undefined) {
          _e = e.targetTouches[0]
        } else if (e.changedTouches[0] !== undefined) {
          _e = e.changedTouches[0]
        } else if (e.touches[0] !== undefined) {
          _e = e.touches[0]
        }
      }
      // }
      if (!_e) { _e = e }
      return {
        x: e.target.parentNode.offsetLeft,
        y: e.target.offsetTop
      }
    },
    changCar (dx) {
      if (dx < 0) {
        this.imgshow++
      } else {
        this.imgshow--
      }
      if (this.imgshow < 0) {
        this.imgshow += 35
      }
      if (this.imgshow > 35) {
        this.imgshow -= 35
      }
    },
    pattern (i) {
      if (this.patternNum === i) {
        this.patternNum = null
      } else {
        this.patternNum = i
      }
      switch (i) {
        case 0:
          this.$router.push({ name: 'interor' })
          break
        case 1:
          this.divisionShow = !this.divisionShow
          break
        case 2:
          if (this.divisionShow) {
            this.divisionShow = !this.divisionShow
          }
          break
        case 3:
          if (this.divisionShow) {
            this.divisionShow = !this.divisionShow
          }
          break
        case 4:
          if (this.divisionShow) {
            this.divisionShow = !this.divisionShow
          }
          break
      }
    },
    commentary (num) {
      this.$router.push({ name: 'explain' })
      this.$store.commit('addPoint', { num })
    }
  }
}
</script>
<style scoped>
@import "../styles/car.css";
</style>
