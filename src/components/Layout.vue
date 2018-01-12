<template>
  <div class="app-wrapper">
    <sideBar />
    <div class="box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import sideBar from '@/components/common/SideBar'
export default {
  name: 'login',
  components: {
    sideBar
  },
  data () {
    return {

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
