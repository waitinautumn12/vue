<template>
  <div class="app-wrapper">
    <sideBar :carmodel="this.$route.params.brand" />
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
      adf: '1234'
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
