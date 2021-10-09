<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about/sss">About</router-link> |
      <router-link to="/study">study</router-link>
    </div>
    <div class="container-box">
      <div>
        <Mnue></Mnue>
      </div>
      <div id="ssss">
        <div class="bruce">
          <Breadcrumb></Breadcrumb>
        </div>
        <div class="router-out" :style="{height:heights+'px'}">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Mnue from '@/components/Mnue.vue'
import Breadcrumb from '@/components/Creadcumb.vue'
export default {
  components:{
    Mnue,
    Breadcrumb
  },
  data(){
    return{
      heights:document.body.clientHeight-80,
    }
  },
  created(){
    if( sessionStorage.getItem('store')){
      this.$store.state.module1=JSON.parse(sessionStorage.getItem('store')).store1;
      this.$store.state.module2=JSON.parse(sessionStorage.getItem('store')).store2;
    }
    window.addEventListener("beforeunload",()=>{
      sessionStorage.setItem('store',JSON.stringify({
          store1:this.$store.state.module1,
          store2:this.$store.state.module2,
        }))
    })
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100vh;
  width: 100%;
  min-width: 600px;
  overflow: hidden;
  padding: 0;
  margin: 0;
}

#nav {
  height: 50px;
  line-height: 50px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.container-box{
  display: flex;
  // justify-content: c;
  width:100%;
  height: 100%;
}
.container-box>div:nth-child(1){
    width: 200px;
    height: 100%;
    overflow: auto;
}
.container-box>div:nth-child(2)>{
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.container-box>div:nth-child(2)>.bruce{
    width:100%;
    height: 30px;
}
.container-box>div:nth-child(2)>.router-out{
  // flex: 1;
  width:100%;
  // height: 100%;
  overflow: auto;
  color:red;
}
</style>
