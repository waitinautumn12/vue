<template>
  <div class="brand">
    <div class="models" @click="gocarStyle('A-Class')">
      <img src="../images/models/A-Class.png" alt="">
      <p>A-Class</p>
    </div>
    <div v-for="item in items" class="models">
      <img v-bind:src="item.img" alt="">
      <p>C-Class</p>
    </div>
    <div class="models">

    </div>
    <div class="models">

    </div>
  </div>
</template>

<script>
export default {
  name: 'model',
  data () {
    return {
      firstPage: false,
      secondPage: true,
      items: [
        {carname: 'C-Class', img: 'src/images/models/C-Class.png'},
        {carname: 'CLA', img: 'src/images/models/CLA.png'},
        {carname: 'CLS', img: 'src/images/models/CLS.png'},
        {carname: 'E-Class', img: 'src/images/models/E-Class.png'},
        {carname: 'G-Class', img: 'src/images/models/G-Class.png'},
        {carname: 'GLA', img: 'src/images/models/GLA.png'},
        {carname: 'GLC', img: 'src/images/models/GLC.png'},
        {carname: 'GLE', img: 'src/images/models/GLE.png'},
        {carname: 'GLS', img: 'src/images/models/GLS.png'},
        {carname: 'GT-roadster', img: 'src/images/models/GT-roadster.png'},
        {carname: 'S-class', img: 'src/images/models/S-class.png'},
        {carname: 'SL', img: 'src/images/models/SL.png'}
      ]
    }
  },
  methods: {
    gocarStyle (M) {
      this.$router.push({ name: 'style' })
      this.$store.commit('recordModel', { M })
      // if (window.localStorage) {
      //   let storage=window.localStorage
      //   storage.model = M
      // }
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
