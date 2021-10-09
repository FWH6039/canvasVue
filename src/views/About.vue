<template>
  <div class="about">
    <h1>This is an about page</h1>
    <i class="fa fa-camera-retro fa-lg"></i>
  </div>
</template>
<script>
// import _ from 'underscore';
export default ({
  name:'about',
  data(){
    return{
      count:0,
      timeout:null
    }
  },
  mounted(){

  },
  methods:{
    dd(){
      this.count+=1;
      console.log(this.count)

    }
  }

})
</script>
<style scoped='less'>
.container{
  height: 100px;
  width: 100%;
  background-color: black;
}
</style>

