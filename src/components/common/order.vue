<template>
  <div class="individuation-order">
    <div style="width:100%;height:14%;">
      <p style="text-align:left;font-size:.125rem;">个性订单</p>
      <p style="width:.33rem;height:.01rem;background:#D5001C;margin:0.08rem 0 .13rem 0;"></p>
      <p style="text-align:left;font-size:.208rem;">Merecedes AMG E63</p>
    </div>
    <div style="width:100%;height:33%;">
      <div>
        <el-row>
          <el-col :span="6">
            <div class="grid-content">
              <div class="caption">
                <img src="../../images/common/ord1.png" alt="">
                <p>加速时间</p>
                <p>3.5s</p>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div class="caption">
                <img src="../../images/common/ord2.png" alt="">
                <p>排量</p>
                <p>54613m</p>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div class="caption">
                <img src="../../images/common/ord3.png" alt="">
                <p>最大扭矩</p>
                <p>800/500Nm</p>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">
              <div class="caption">
                <img src="../../images/common/ord4.png" alt="">
                <p>最高时速</p>
                <p>250km/h</p>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row style="margin-top:.267rem;">
          <el-col :span="6">
            <div class="grid-content">
              <div class="caption">
                <img src="../../images/common/ord5.png" alt="">
                <p>油耗</p>
                <p>15.3/L</p>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div class="caption">
                <img src="../../images/common/ord6.png" alt="">
                <p>功率</p>
                <p>430kW</p>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div class="caption">
                <img src="../../images/common/ord7.png" alt="">
                <p>移动方式</p>
                <p>4MATIC</p>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">

            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div style="width:100%;height:53%;">

      <el-row>
        <el-col :span="8" style="padding: 0 4px 0 0;">
          <div class="grid-content bg-purple parameter_key">发动机类型</div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple-light parameter_val">V8双涡轮增压发动机</div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8" style="padding: 0 4px 0 0;">
          <div class="grid-content bg-purple parameter_key">排量</div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple-light parameter_val">5461毫升</div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8" style="padding: 0 4px 0 0;">
          <div class="grid-content bg-purple parameter_key">额定功率</div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple-light parameter_val">430千瓦</div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8" style="padding: 0 4px 0 0;">
          <div class="grid-content bg-purple parameter_key">额定扭矩</div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple-light parameter_val">800牛顿</div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8" style="padding: 0 4px 0 0;">
          <div class="grid-content bg-purple parameter_key">最高车速</div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple-light parameter_val">250千米／消失</div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8" style="padding: 0 4px 0 0;">
          <div class="grid-content bg-purple parameter_key">加速时间</div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple-light parameter_val">3.5秒</div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8" style="padding: 0 4px 0 0;">
          <div class="grid-content bg-purple parameter_key_color">
            <img v-bind:src="$store.state.activeColor.url" alt="">
          </div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple-light parameter_val_color">{{$store.state.activeColor.name}}</div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8" style="padding: 0 4px 0 0;">
          <div class="grid-content bg-purple parameter_key_color">
            <img style="width:.53rem;margin-left:.12rem;" src="../../images/common/wheel2.png" alt="">
          </div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple-light parameter_val_color">12</div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8" style="padding: 0 4px 0 0;">
          <div class="grid-content bg-purple parameter_key" style="border-bottom:4px solid #000;">厂商建议价格</div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple-light parameter_val" style="border-bottom:2px solid #000;color:#000;">1,280,000元</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'order',
  data () {
    return {

    }
  }
}
</script>
<style scoped>
.individuation-order{
  background:#fff;
  padding: .2rem .205rem;
  width:100%;
  height:100%;
}
.caption{
  line-height: .1rem;
}
.caption img{
  width: .468rem;
}
.caption p:nth-child(2){
  font-size: .1rem;
  margin-top: 0.088rem;
}
.caption p:nth-child(3){
  font-size: .125rem;
  margin-top: 0.065rem;
}
.parameter_key{
  border-top:4px solid #000;
  box-sizing: border-box;
  text-align: left;
  width: 100%;
  height: .31rem;
  line-height: .31rem;
  font-size: .125rem;
}
.parameter_val{
  border-top:2px solid #000;
  box-sizing: border-box;
  text-align: left;
  width: 100%;
  height: .31rem;
  font-size: .125rem;
  line-height: .31rem;
  color:#333;
}
.parameter_key_color{
  border-top:4px solid #000;
  box-sizing: border-box;
  text-align: left;
  width: 100%;
  height: .65rem;
  line-height: .1rem;
}
.parameter_key_color img{
  width: .82rem;
  height: .53rem;
  margin-top: .04rem;
}
.parameter_val_color{
  border-top:2px solid #000;
  box-sizing: border-box;
  text-align: left;
  width: 100%;
  height: .31rem;
  line-height: .66rem;
  color:#333;
  font-size:.125rem;
}
</style>
