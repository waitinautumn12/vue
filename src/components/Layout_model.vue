<template>
  <div class="app-wrapper">
    <sideBar />
    <div class="box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import sideBar from '@/components/common/SideBar1'
export default {
  name: 'login',
  components: {
    sideBar
  },
  data () {
    return {
      phone: '',
      loginPassword: '',
      registerPassword: '',
      rePassword: '',
      phoneCode: '',
      activeTab: 'login',
      captcha: null,
      verifyCode: '',
      countdown: 60,
      countText: '获取验证码',
      getcode: 'getcode',
      isDisable: false,
      quick: false,
      dialog: false
    }
  }
}
</script>
<style>
.box{
  width: 16.25rem;
  height: 100vh;
  float: left;
}
</style>
