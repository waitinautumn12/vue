<template>
  <div v-bind:style="{background : senceurl,backgroundSize : sencesize,}" class="thirdPage" @touchstart="bodytouch_s" @touchmove="bodytouch_m" @touchend="bodytouch_e">
    <div class="pattern-option">
      <div v-for="(url, i) in patterns" @click="pattern(i)" v-bind:style="{ background: i === patternNum ? url.src1 : url.src}">
        <div v-show=" i === patternNum">
          <div class="show-pattern-background" v-bind:style="{ background: url.src2}"></div>
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

    <div class="area" :style="{height: (wW * 1132) / 640 + 'px', marginTop: (1132 - ((wW * 1132) / 640)) / 2 + 'px'}">
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

        <div class="car car1">
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

export default {
  name: 'CAR',
  data () {
    return {
      wW: null,
      wH: null,
      patternNum: null,
      patternDefault: true,
      divisionShow: false,
      division_l: '50%',
      division_t: '50%',
      senceurl: 'url(src/images/common/sence2.png) 50% 50%',
      sencesize: 'cover',
      patterns: patterns,
      colors: colors,
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
          this.senceurl = 'url(src/images/common/sence2.png) no-repeat 50% 50%'
          this.sencesize = 'cover'
          break
        case 1 :
          this.senceurl = 'url(src/images/common/donggan.png) no-repeat 50% 50%'
          this.sencesize = 'cover'
          break
        case 2 :
          this.senceurl = 'url(src/images/common/kongjian.png) no-repeat 50% 50%'
          this.sencesize = 'cover'
          break
      }
    },
    bodytouch_s (e) {
      var _xy = this.getXY(e)
      this.sX = _xy.x
    },
    bodytouch_m (e) {
      var _xy = this.getXY(e)
      var eX = _xy.x
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
      var _xy = this.getXY(e)
      var eX = _xy.x
      var eY = _xy.y
      this.division_l = eX + 'px'
      this.division_t = eY + 'px'
    },
    colortouch_s (e) {
      var xy = this.getXY(e)
      var _xy = this.getoffsetXY(e)
      var eX = _xy.x
      var eY = _xy.y
      var parentoffsetleft = this.$refs.colorbox.offsetLeft
      // 点击位置相对于色块水平方向的距离
      this.offsetX = parseInt(xy.x) - (parseInt(eX) + parseInt(parentoffsetleft))
      // 点击位置相对于色块竖直方向的距离
      this.offsetY = eY
    },
    colortouch_m (e, i) {
      this.colorsign = i
      var _xy = this.getXY(e)
      this.colorpositionX = parseInt(_xy.x) - parseInt(this.offsetY) + 'px'
      this.colorpositionY = parseInt(_xy.y) - parseInt(this.offsetY) + 'px'
    },
    colortouch_e (e, i) {
      this.colorsign = null
      var divisionL = parseInt(this.division_l.replace('px'))
      var colorpositionX = parseInt(this.colorpositionX.replace('px'))
      if (colorpositionX > divisionL) {
        this.showcolor = parseInt(i)
      } else {
        this.dragshow = parseInt(i)
      }
    },
    getXY (e) {
      var _e = false
      if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
        if (e.targetTouches || e.changedTouches || e.touches) {
          if (e.targetTouches[0] !== undefined) {
            _e = e.targetTouches[0]
          } else if (e.changedTouches[0] !== undefined) {
            _e = e.changedTouches[0]
          } else if (e.touches[0] !== undefined) {
            _e = e.touches[0]
          }
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
      var _e = false
      if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
        if (e.targetTouches || e.changedTouches || e.touches) {
          if (e.targetTouches[0] !== undefined) {
            _e = e.targetTouches[0]
          } else if (e.changedTouches[0] !== undefined) {
            _e = e.changedTouches[0]
          } else if (e.touches[0] !== undefined) {
            _e = e.touches[0]
          }
        }
      }
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

          break
        case 3:

          break
        case 4:

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
