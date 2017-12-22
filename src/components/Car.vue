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

    <div ref="division_l" style="width: 100vw;height: 100vh;">
      <div class="carBox">
        <div class="dianBox">
          <div class="hotpoint" v-for="hot in hotPoint">
            <img v-for="(item, i) in hot" @click="commentary(i)" v-show="item[0] === imgshow" v-bind:style="{ left: item[1] + 'px', top: item[2] + 'px'}" src="../images/common/dian.png" alt="">
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
export default {
  name: 'CAR',
  data () {
    return {
      patternNum: null,
      patternDefault: true,
      divisionShow: false,
      division_l: '50%',
      division_t: '50%',
      senceurl: 'url(src/images/common/sence2.png) 50% 50%',
      sencesize: 'cover',
      patterns: [
        {src: 'url(src/images/common/interior.png) 100% / 100%', src1: 'url(src/images/common/interior-a.png) 100% / 100%'},
        {src: 'url(src/images/common/contrast.png) 100% / 100%', src1: 'url(src/images/common/contrast-a.png) 100% / 100%'},
        {src: 'url(src/images/common/hotport.png) 100% / 100%', src1: 'url(src/images/common/hotport-a.png) 100% / 100%', src2: 'url(src/images/common/wechart.jpeg) 100% / 100%'},
        {src: 'url(src/images/common/order.png) 100% / 100%', src1: 'url(src/images/common/order-a.png) 100% / 100%', src2: 'url(src/images/common/order2.png) 100% / 100%'},
        {src: 'url(src/images/common/price.png) 100% / 100%', src1: 'url(src/images/common/price-a.png) 100% / 100%', src2: 'url(src/images/common/carprice.jpeg) 100% / 100%'}
      ],
      colors: [
        {name: 'black', color: '炫晶黑', src: 'src/images/common/black.png'},
        {name: 'brown', color: '棕色', src: 'src/images/common/brown.png'},
        {name: 'grey', color: '浅灰', src: 'src/images/common/lightgrey.png'},
        {name: 'red', color: '炫动红', src: 'src/images/common/xuandonghong.png'},
        {name: 'silver', color: '钻石银', src: 'src/images/common/zuanshiyin.png'}
      ],
      colActive: 'black',
      wheels: [
        {name: 'twenty', wheel: '20寸轮毂', src: 'src/images/common/wheel1.png'},
        {name: 'nineteen', wheel: '19寸轮毂', src: 'src/images/common/wheel2.png'},
        {name: 'eighteen', wheel: '18寸轮毂', src: 'src/images/common/wheel3.png'},
        {name: 'sevevteen', wheel: '17寸轮毂', src: 'src/images/common/wheel4.png'}
      ],
      wheelActive: 'twenty',
      hotPoint: [
        // [
        //   [0, 264, 268],
        //   [1, 208, 268],
        //   [2, 162, 266],
        //   [3, 121, 267],
        //   [4, 91, 267],
        //   [5, 67, 264],
        //   [6, 52, 264],
        //   [7, 44, 261],
        //   [32, 454, 262],
        //   [33, 406, 268],
        //   [34, 356, 268],
        //   [35, 309, 271]
        // ],
        [
          [0, 416, 316],
          [1, 378, 314],
          [2, 343, 314],
          [3, 305, 319],
          [4, 271, 317],
          [5, 240, 317],
          [6, 218, 314],
          [7, 200, 313],
          [8, 188, 314],
          [9, 182, 314],
          [10, 181, 314],
          [11, 188, 314],
          [12, 195, 314],
          [35, 455, 318]
        ]
      ],
      spaces: [
        {name: 'dream', space: '梦幻空间', src: 'src/images/common/menghuan.png'},
        {name: 'space', space: '宇宙空间', src: 'src/images/common/kongjian.png'},
        {name: 'dynamic', space: '动感空间', src: 'src/images/common/donggan.png'}
      ],
      spaceActive: 'dream',
      carsheel: [
        'src/images/car/1/o/0.png',
        'src/images/car/1/o/1.png',
        'src/images/car/1/o/2.png',
        'src/images/car/1/o/3.png',
        'src/images/car/1/o/4.png',
        'src/images/car/1/o/5.png',
        'src/images/car/1/o/6.png',
        'src/images/car/1/o/7.png',
        'src/images/car/1/o/8.png',
        'src/images/car/1/o/9.png',
        'src/images/car/1/o/10.png',
        'src/images/car/1/o/11.png',
        'src/images/car/1/o/12.png',
        'src/images/car/1/o/13.png',
        'src/images/car/1/o/14.png',
        'src/images/car/1/o/15.png',
        'src/images/car/1/o/16.png',
        'src/images/car/1/o/17.png',
        'src/images/car/1/o/18.png',
        'src/images/car/1/o/19.png',
        'src/images/car/1/o/20.png',
        'src/images/car/1/o/21.png',
        'src/images/car/1/o/22.png',
        'src/images/car/1/o/23.png',
        'src/images/car/1/o/24.png',
        'src/images/car/1/o/25.png',
        'src/images/car/1/o/26.png',
        'src/images/car/1/o/27.png',
        'src/images/car/1/o/28.png',
        'src/images/car/1/o/29.png',
        'src/images/car/1/o/30.png',
        'src/images/car/1/o/31.png',
        'src/images/car/1/o/32.png',
        'src/images/car/1/o/33.png',
        'src/images/car/1/o/34.png',
        'src/images/car/1/o/35.png'
      ],
      coloritems: [
        {class: 'col col1',
          color: [
            'src/images/car/1/c1/0.png',
            'src/images/car/1/c1/1.png',
            'src/images/car/1/c1/2.png',
            'src/images/car/1/c1/3.png',
            'src/images/car/1/c1/4.png',
            'src/images/car/1/c1/5.png',
            'src/images/car/1/c1/6.png',
            'src/images/car/1/c1/7.png',
            'src/images/car/1/c1/8.png',
            'src/images/car/1/c1/9.png',
            'src/images/car/1/c1/10.png',
            'src/images/car/1/c1/11.png',
            'src/images/car/1/c1/12.png',
            'src/images/car/1/c1/13.png',
            'src/images/car/1/c1/14.png',
            'src/images/car/1/c1/15.png',
            'src/images/car/1/c1/16.png',
            'src/images/car/1/c1/17.png',
            'src/images/car/1/c1/18.png',
            'src/images/car/1/c1/19.png',
            'src/images/car/1/c1/20.png',
            'src/images/car/1/c1/21.png',
            'src/images/car/1/c1/22.png',
            'src/images/car/1/c1/23.png',
            'src/images/car/1/c1/24.png',
            'src/images/car/1/c1/25.png',
            'src/images/car/1/c1/26.png',
            'src/images/car/1/c1/27.png',
            'src/images/car/1/c1/28.png',
            'src/images/car/1/c1/29.png',
            'src/images/car/1/c1/30.png',
            'src/images/car/1/c1/31.png',
            'src/images/car/1/c1/32.png',
            'src/images/car/1/c1/33.png',
            'src/images/car/1/c1/34.png',
            'src/images/car/1/c1/35.png'
          ]
        },
        {class: 'col col2',
          color: [
            'src/images/car/1/c2/0.png',
            'src/images/car/1/c2/1.png',
            'src/images/car/1/c2/2.png',
            'src/images/car/1/c2/3.png',
            'src/images/car/1/c2/4.png',
            'src/images/car/1/c2/5.png',
            'src/images/car/1/c2/6.png',
            'src/images/car/1/c2/7.png',
            'src/images/car/1/c2/8.png',
            'src/images/car/1/c2/9.png',
            'src/images/car/1/c2/10.png',
            'src/images/car/1/c2/11.png',
            'src/images/car/1/c2/12.png',
            'src/images/car/1/c2/13.png',
            'src/images/car/1/c2/14.png',
            'src/images/car/1/c2/15.png',
            'src/images/car/1/c2/16.png',
            'src/images/car/1/c2/17.png',
            'src/images/car/1/c2/18.png',
            'src/images/car/1/c2/19.png',
            'src/images/car/1/c2/20.png',
            'src/images/car/1/c2/21.png',
            'src/images/car/1/c2/22.png',
            'src/images/car/1/c2/23.png',
            'src/images/car/1/c2/24.png',
            'src/images/car/1/c2/25.png',
            'src/images/car/1/c2/26.png',
            'src/images/car/1/c2/27.png',
            'src/images/car/1/c2/28.png',
            'src/images/car/1/c2/29.png',
            'src/images/car/1/c2/30.png',
            'src/images/car/1/c2/31.png',
            'src/images/car/1/c2/32.png',
            'src/images/car/1/c2/33.png',
            'src/images/car/1/c2/34.png',
            'src/images/car/1/c2/35.png'
          ]
        },
        {class: 'col col3',
          color: [
            'src/images/car/1/c3/0.png',
            'src/images/car/1/c3/1.png',
            'src/images/car/1/c3/2.png',
            'src/images/car/1/c3/3.png',
            'src/images/car/1/c3/4.png',
            'src/images/car/1/c3/5.png',
            'src/images/car/1/c3/6.png',
            'src/images/car/1/c3/7.png',
            'src/images/car/1/c3/8.png',
            'src/images/car/1/c3/9.png',
            'src/images/car/1/c3/10.png',
            'src/images/car/1/c3/11.png',
            'src/images/car/1/c3/12.png',
            'src/images/car/1/c3/13.png',
            'src/images/car/1/c3/14.png',
            'src/images/car/1/c3/15.png',
            'src/images/car/1/c3/16.png',
            'src/images/car/1/c3/17.png',
            'src/images/car/1/c3/18.png',
            'src/images/car/1/c3/19.png',
            'src/images/car/1/c3/20.png',
            'src/images/car/1/c3/21.png',
            'src/images/car/1/c3/22.png',
            'src/images/car/1/c3/23.png',
            'src/images/car/1/c3/24.png',
            'src/images/car/1/c3/25.png',
            'src/images/car/1/c3/26.png',
            'src/images/car/1/c3/27.png',
            'src/images/car/1/c3/28.png',
            'src/images/car/1/c3/29.png',
            'src/images/car/1/c3/30.png',
            'src/images/car/1/c3/31.png',
            'src/images/car/1/c3/32.png',
            'src/images/car/1/c3/33.png',
            'src/images/car/1/c3/34.png',
            'src/images/car/1/c3/35.png'
          ]
        },
        {class: 'col col4',
          color: [
            'src/images/car/1/c4/0.png',
            'src/images/car/1/c4/1.png',
            'src/images/car/1/c4/2.png',
            'src/images/car/1/c4/3.png',
            'src/images/car/1/c4/4.png',
            'src/images/car/1/c4/5.png',
            'src/images/car/1/c4/6.png',
            'src/images/car/1/c4/7.png',
            'src/images/car/1/c4/8.png',
            'src/images/car/1/c4/9.png',
            'src/images/car/1/c4/10.png',
            'src/images/car/1/c4/11.png',
            'src/images/car/1/c4/12.png',
            'src/images/car/1/c4/13.png',
            'src/images/car/1/c4/14.png',
            'src/images/car/1/c4/15.png',
            'src/images/car/1/c4/16.png',
            'src/images/car/1/c4/17.png',
            'src/images/car/1/c4/18.png',
            'src/images/car/1/c4/19.png',
            'src/images/car/1/c4/20.png',
            'src/images/car/1/c4/21.png',
            'src/images/car/1/c4/22.png',
            'src/images/car/1/c4/23.png',
            'src/images/car/1/c4/24.png',
            'src/images/car/1/c4/25.png',
            'src/images/car/1/c4/26.png',
            'src/images/car/1/c4/27.png',
            'src/images/car/1/c4/28.png',
            'src/images/car/1/c4/29.png',
            'src/images/car/1/c4/30.png',
            'src/images/car/1/c4/31.png',
            'src/images/car/1/c4/32.png',
            'src/images/car/1/c4/33.png',
            'src/images/car/1/c4/34.png',
            'src/images/car/1/c4/35.png'
          ]
        },
        {class: 'col col5',
          color: [
            'src/images/car/1/c5/0.png',
            'src/images/car/1/c5/1.png',
            'src/images/car/1/c5/2.png',
            'src/images/car/1/c5/3.png',
            'src/images/car/1/c5/4.png',
            'src/images/car/1/c5/5.png',
            'src/images/car/1/c5/6.png',
            'src/images/car/1/c5/7.png',
            'src/images/car/1/c5/8.png',
            'src/images/car/1/c5/9.png',
            'src/images/car/1/c5/10.png',
            'src/images/car/1/c5/11.png',
            'src/images/car/1/c5/12.png',
            'src/images/car/1/c5/13.png',
            'src/images/car/1/c5/14.png',
            'src/images/car/1/c5/15.png',
            'src/images/car/1/c5/16.png',
            'src/images/car/1/c5/17.png',
            'src/images/car/1/c5/18.png',
            'src/images/car/1/c5/19.png',
            'src/images/car/1/c5/20.png',
            'src/images/car/1/c5/21.png',
            'src/images/car/1/c5/22.png',
            'src/images/car/1/c5/23.png',
            'src/images/car/1/c5/24.png',
            'src/images/car/1/c5/25.png',
            'src/images/car/1/c5/26.png',
            'src/images/car/1/c5/27.png',
            'src/images/car/1/c5/28.png',
            'src/images/car/1/c5/29.png',
            'src/images/car/1/c5/30.png',
            'src/images/car/1/c5/31.png',
            'src/images/car/1/c5/32.png',
            'src/images/car/1/c5/33.png',
            'src/images/car/1/c5/34.png',
            'src/images/car/1/c5/35.png'
          ]
        }
      ],
      wheelitems: [
        {class: 'lg lg1',
          wheel: [
            'src/images/car/1/lg/0.png',
            'src/images/car/1/lg/1.png',
            'src/images/car/1/lg/2.png',
            'src/images/car/1/lg/3.png',
            'src/images/car/1/lg/4.png',
            'src/images/car/1/lg/5.png',
            'src/images/car/1/lg/6.png',
            'src/images/car/1/lg/7.png',
            'src/images/car/1/lg/8.png',
            'src/images/car/1/lg/9.png',
            'src/images/car/1/lg/10.png',
            'src/images/car/1/lg/11.png',
            'src/images/car/1/lg/12.png',
            'src/images/car/1/lg/13.png',
            'src/images/car/1/lg/14.png',
            'src/images/car/1/lg/15.png',
            'src/images/car/1/lg/16.png',
            'src/images/car/1/lg/17.png',
            'src/images/car/1/lg/18.png',
            'src/images/car/1/lg/19.png',
            'src/images/car/1/lg/20.png',
            'src/images/car/1/lg/21.png',
            'src/images/car/1/lg/22.png',
            'src/images/car/1/lg/23.png',
            'src/images/car/1/lg/24.png',
            'src/images/car/1/lg/25.png',
            'src/images/car/1/lg/26.png',
            'src/images/car/1/lg/27.png',
            'src/images/car/1/lg/28.png',
            'src/images/car/1/lg/29.png',
            'src/images/car/1/lg/30.png',
            'src/images/car/1/lg/31.png',
            'src/images/car/1/lg/32.png',
            'src/images/car/1/lg/33.png',
            'src/images/car/1/lg/34.png',
            'src/images/car/1/lg/35.png'
          ]
        },
        {class: 'lg lg2',
          wheel: [
            'src/images/car/1/lg1/0.png',
            'src/images/car/1/lg1/1.png',
            'src/images/car/1/lg1/2.png',
            'src/images/car/1/lg1/3.png',
            'src/images/car/1/lg1/4.png',
            'src/images/car/1/lg1/5.png',
            'src/images/car/1/lg1/6.png',
            'src/images/car/1/lg1/7.png',
            'src/images/car/1/lg1/8.png',
            'src/images/car/1/lg1/9.png',
            'src/images/car/1/lg1/10.png',
            'src/images/car/1/lg1/11.png',
            'src/images/car/1/lg1/12.png',
            'src/images/car/1/lg1/13.png',
            'src/images/car/1/lg1/14.png',
            'src/images/car/1/lg1/15.png',
            'src/images/car/1/lg1/16.png',
            'src/images/car/1/lg1/17.png',
            'src/images/car/1/lg1/18.png',
            'src/images/car/1/lg1/19.png',
            'src/images/car/1/lg1/20.png',
            'src/images/car/1/lg1/21.png',
            'src/images/car/1/lg1/22.png',
            'src/images/car/1/lg1/23.png',
            'src/images/car/1/lg1/24.png',
            'src/images/car/1/lg1/25.png',
            'src/images/car/1/lg1/26.png',
            'src/images/car/1/lg1/27.png',
            'src/images/car/1/lg1/28.png',
            'src/images/car/1/lg1/29.png',
            'src/images/car/1/lg1/30.png',
            'src/images/car/1/lg1/31.png',
            'src/images/car/1/lg1/32.png',
            'src/images/car/1/lg1/33.png',
            'src/images/car/1/lg1/34.png',
            'src/images/car/1/lg1/35.png'
          ]
        },
        {class: 'lg lg3',
          wheel: [
            'src/images/car/1/lg/0.png',
            'src/images/car/1/lg/1.png',
            'src/images/car/1/lg/2.png',
            'src/images/car/1/lg/3.png',
            'src/images/car/1/lg/4.png',
            'src/images/car/1/lg/5.png',
            'src/images/car/1/lg/6.png',
            'src/images/car/1/lg/7.png',
            'src/images/car/1/lg/8.png',
            'src/images/car/1/lg/9.png',
            'src/images/car/1/lg/10.png',
            'src/images/car/1/lg/11.png',
            'src/images/car/1/lg/12.png',
            'src/images/car/1/lg/13.png',
            'src/images/car/1/lg/14.png',
            'src/images/car/1/lg/15.png',
            'src/images/car/1/lg/16.png',
            'src/images/car/1/lg/17.png',
            'src/images/car/1/lg/18.png',
            'src/images/car/1/lg/19.png',
            'src/images/car/1/lg/20.png',
            'src/images/car/1/lg/21.png',
            'src/images/car/1/lg/22.png',
            'src/images/car/1/lg/23.png',
            'src/images/car/1/lg/24.png',
            'src/images/car/1/lg/25.png',
            'src/images/car/1/lg/26.png',
            'src/images/car/1/lg/27.png',
            'src/images/car/1/lg/28.png',
            'src/images/car/1/lg/29.png',
            'src/images/car/1/lg/30.png',
            'src/images/car/1/lg/31.png',
            'src/images/car/1/lg/32.png',
            'src/images/car/1/lg/33.png',
            'src/images/car/1/lg/34.png',
            'src/images/car/1/lg/35.png'
          ]
        }
      ],
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
    commentary (i) {
      this.$router.push({ name: 'explain' })
    }
  }
}
</script>
<style scoped>
@import "../styles/car.css";
</style>
