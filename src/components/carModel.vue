<template>
  <div class="brand">
    <div v-for="item in carmodel" class="models" @click="gocarStyle(item.carname)">
      <img v-bind:src="item.img" alt="">
      <p>{{item.carname}}</p>
    </div>
    <!-- <div class="models">

    </div>
    <div class="models">

    </div> -->
  </div>
</template>

<script>
import { carmodel } from '@/script/carmodel'
export default {
  name: 'model',
  data () {
    return {
      carmodel: null
    }
  },
  created () {
    this.carmodel = carmodel(this.$route.params.brand)
  },
  methods: {
    gocarStyle (M) {
      this.$router.push({ name: 'style', params: {brand: this.$route.params.brand, model: M} })
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
.models{
  width: 20%;
  height: 25%;
  float: left;
  position: relative;
  cursor: pointer;
  position: relative;
  background: -webkit-linear-gradient(#fff, #f5f5f5);
}
.models img{
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
}
.models p{
  width: 40%;
  height: .58rem;
  border-left: 1px solid #D5001C;
  position: absolute;
  font-size: .2rem;
  line-height: .15rem;
  left: .37rem;
  top: .63rem;
  text-align: left;
  padding-left: .09rem;
}

</style>
