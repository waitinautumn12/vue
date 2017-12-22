<template>
  <div class="brand">
    <div class="models" @click="gocarStyle()">
      <img src="../images/models/A-Class.png" alt="">
      <p>A-Class</p>
    </div>
    <div class="models">
      <img src="../images/models/C-Class.png" alt="">
      <p>C-Class</p>
    </div>
    <div class="models">
      <img src="../images/models/CLA.png" alt="">
      <p>CLA</p>
    </div>
    <div class="models">
      <img src="../images/models/CLS.png" alt="">
      <p>CLS</p>
    </div>
    <div class="models">
      <img src="../images/models/E-Class.png" alt="">
      <p>E-Class</p>
    </div>
    <div class="models">
      <img src="../images/models/G-Class.png" alt="">
      <p>G-Class</p>
    </div>
    <div class="models">
      <img src="../images/models/GLA.png" alt="">
      <p>GLA</p>
    </div>
    <div class="models">
      <img src="../images/models/GLC.png" alt="">
      <p>GLC</p>
    </div>
    <div class="models">
      <img src="../images/models/GLE.png" alt="">
      <p>GLE</p>
    </div>
    <div class="models">
      <img src="../images/models/GLS.png" alt="">
      <p>GLS</p>
    </div>
    <div class="models">
      <img src="../images/models/GT-roadster.png" alt="">
      <p>GT-roadster</p>
    </div>
    <div class="models">
      <img src="../images/models/S-class.png" alt="">
      <p>S-class</p>
    </div>
    <div class="models">
      <img src="../images/models/SL.png" alt="">
      <p>SL</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'model',
  data () {
    return {
      firstPage: false,
      secondPage: true
    }
  },
  methods: {
    gocarStyle () {
      this.$router.push({ name: 'style' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.brand{
  width: 85vw;
  height: 100vh;
  fontSize: 1.5vw;
  float: left;
}
.models{
  width: 20%;
  height: 25vh;
  float: left;
  position: relative;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.models img{
  width: 90%;
}
.models p{
  width: 40%;
  height: 4vh;
  border-left: 1px solid #D5001C;
  position: absolute;
  left: 2vw;
  top: 3vh;
  text-align: left;
  padding-left: 20px;
}

</style>
